import Vue from 'vue'
const IS_BUILD = process.env.BUILD_ENV === 'prod'
// import { send } from 'eop-vue-core'

// import { getInitialNotification, registerFcmEvent } from './fcm'
// import { initializeApn, apnsInfo } from './apn'

// import AuthInfoPopup from '@comp/common/AuthInfoPopup'
/*

let checkVersion
let bus
if (process.env.MOBILE) {
    window.deviceready = false
    import('./version')
        .then(result => {
            checkVersion = result.checkVersion
        })
    bus = new Vue()
} */
const init = (cb) => {
  !IS_BUILD && cb && cb()
  /* document.addEventListener('DOMContentLoaded', function (e) {
        if (!window.fdpbridge) return
        window.fdpbridge.addEventListener('deviceready', () => {
            if (window.deviceready) return
            IS_BUILD && cb && cb()
            window.deviceready = true
            // 상단 Notification으로 부터 받은 fcm intent 전달
            registerFcmEvent()
            getInitialNotification()
            setTimeout(() => {
                window.fdpbridge.execAsync('changeColor', { type: 'top', color: 'white' }).then((result) => {
                }).catch((error) => {
                    console.log(error)
                })
                window.fdpbridge.execAsync('changeColor', { type: 'bottom', color: 'white' }).then((result) => {
                }).catch((error) => {
                    console.log(error)
                })
            }, 1000)

            window.fdpbridge.addEventListener('onresume', () => {
                checkVersion && checkVersion()
                bus.$emit('native_onResume')
            })

            window.fdpbridge.addEventListener('onpause', () => {
                bus.$emit('native_onPause')
            })

            window.fdpbridge.addEventListener('networkchange', (netInfo) => {
                bus.$emit('native_onNetworkChange', netInfo)
            })
            window.fdpbridge.addEventListener('backkey', () => {
                bus.$emit('native_onBackPressed')
            })

            if (window.fdp.platform === 'android') {
                requestMultiple()
            } else if (window.fdp.platform === 'ios') {
                initializeApn()
            }

            hideSplash()
            checkVersion && checkVersion()
        })
    }) */
}
export const initialize = init
// splash 종료
export const hideSplash = () => {
  window.deviceready && window.fdpbridge && window.fdpbridge.execAsync && window.fdpbridge.execAsync('hideSplash')
}
/*
// FDP init

export const EventBus = bus
export const initialize = init



// App 종료
export const exitApp = () => {
    window.fdp.app.exitApp()
}

// push token 조회
export const getToken = () => {
    return new Promise((resolve, reject) => {
        if (window.fdp.platform === 'android') {
            window.fdp.fcm.getFCMToken().then(success => {
                resolve(success.data)
            }).catch((error) => {
                reject(error)
            })
        } else {
            resolve(apnsInfo.token)
        }
    })
}

// token update
export const updateToken = () => {
    return new Promise((resolve) => {
        getDeviceInfo().then(result => {
            getToken().then(token => {
                if (token) {
                    const params = {
                        appId: result.appId,
                        pushKeyId: token,
                        equmtNo: result.equmtNo
                    }
                    send('ORG-PUT-/user/users/push-key', null, null, { params: params })
                        .then(() => {
                            resolve('success')
                        })
                }
            })
        })
    })
}

// 권한 요청
export const requestMultiple = () => {
    const authList = ['READ_EXTERNAL_STORAGE', 'CAMERA']
    const checkList = []
    const requestList = []
    authList.forEach(auth => {
        checkList.push(window.fdp.permission.check(auth))
    })
    Promise.all(checkList).then(values => {
        for (let i = 0; i < values.length; i++) {
            !values[i] && requestList.push(authList[i])
        }
        if (requestList.length > 0) {
            showAuthInfoPopup(() => {
                let flag = true
                window.fdp.permission.requestMultiple(requestList)
                    .then(success => {
                        authList.forEach(auth => {
                            success['android.permission.' + auth] === 'denied' && (flag = false)
                        })
                        !flag && requestMultiple()
                    }).catch((error) => {
                        Promise.reject(error)
                    })
            })
        }
    })
}

// 권한 정보 팝업
const showAuthInfoPopup = (listener) => {
    const Constructor = Vue.extend(AuthInfoPopup)
    const popupInstance = new Constructor({
        data: { listener: listener }
    })
    popupInstance.vm = popupInstance.$mount()
    document.body.appendChild(popupInstance.vm.$el)
}

// 디바이스 정보
export const getDeviceInfo = () => {
    return new Promise((resolve, reject) => {
        Promise.all([window.fdp.deviceInfo.getDeviceId(),
            window.fdpbridge.execAsync('FDPDeviceInfo.getSystemVersion'),
            window.fdpbridge.execAsync('FDPDeviceInfo.getModel'),
            getAppInfo()])
            .then(values => {
                const deviceInfo = {
                    appId: values[3].appId,
                    osTypCd: window.fdp.platform === 'android' ? 'Android' : 'iOS',
                    equmtNo: values[0].data,
                    osVerNm: values[1].data,
                    acesEqumtModelNm: values[2].data
                }
                resolve(deviceInfo)
            }).catch((error) => {
                reject(error)
            })
    })
}

export const getAppInfo = () => {
    return new Promise((resolve, reject) => {
        window.fdp.appInfo.getAppInfoList().then((success) => {
            const data = JSON.parse(success.data)
            const appInfo = {
                appId: window.fdp.platform === 'android' ? data.APPLICATION_ID : data.CFBundleIdentifier,
                verId: window.fdp.platform === 'android' ? data.VERSION_NAME : data.CFBundleShortVersionString,
                osTypCd: window.fdp.platform === 'android' ? 'Android' : 'Ios',
                appName: window.fdp.platform === 'android' ? data.APP_NAME : data.CFBundleDisplayName
            }
            resolve(appInfo)
        })
    })
}

// PC 도메인 정보 조회
export const getPcDomain = () => {
    if (window.deviceready && window.fdpbridge) {
        return window.fdpbridge.execAsync('getPcDomain')
    } else {
        return Promise.reject(new Error())
    }
}

export const setApplicationIconBadgeNumber = (count) => {
    if (window.fdp && window.fdp.platform === 'ios') {
        window.fdpbridge.execAsync('APNS.setApplicationIconBadgeNumber', count)
    }
}

export const lockToPortrait = () => {
    if (window.fdp.platform === 'android') {
        window.fdpbridge.exec('showStatusBar', 'Y')
        return window.fdpbridge.execAsync('FDPOrientation.lockToPortrait', {})
    } else if (window.fdp.platform === 'ios') {
        return window.fdpbridge.execAsync('doOrientateIOS', { type: 'portrait', direction: 'both' })
    }
}
export const lockToLandscape = () => {
    if (window.fdp.platform === 'android') {
        window.fdpbridge.exec('showStatusBar', 'N')
        return window.fdpbridge.execAsync('FDPOrientation.lockToLandscape', {})
    } else if (window.fdp.platform === 'ios') {
        return window.fdpbridge.execAsync('doOrientateIOS', { type: 'landscape', direction: 'both' })
    }
}

export const showStatusBar = (isShow) => {
    window.fdpbridge.exec('showStatusBar', isShow ? 'Y' : 'N')
}
*/