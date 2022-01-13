
import { EventBus } from '@/mobile'
import store from '@/store'

const apnsInfoObject = {}
export const apnsInfo = apnsInfoObject
export const initializeApn = () => {
// APNS
  window.fdpbridge.execAsync('APNS.getInitialNotification').then((notification) => {
    console.log('getInitialNotification start ', JSON.stringify(notification))
    if (notification.data.message === 'null') {
      console.log('message is null')
    } else {
      console.log(JSON.stringify(notification))
      const result = notification && notification.data.data ? notification.data.data : {}

      EventBus.$emit('FCMEvent.Notification', result)
    }
  }).catch((error) => {
    console.log(error)
  })

  window.fdpbridge.addEventListener('APNS.notification', (notification) => {
    console.log(JSON.stringify(notification))
    console.log(notification.currentState)
    if (notification.currentState === 'background') {
      // 백그라운드에서 푸쉬를 받았을 때
      const result = notification && notification._data ? notification._data : {}
      EventBus.$emit('FCMEvent.Notification', result)
    } else {
      // EventBus.$emit('FCMEvent.Notification', result)
      // 앱이 작동중인 상태에서 푸쉬를 받았을 때
      // 프로세스가 살아 있을 때 푸시 메세지를 수신한 경우
      // 디바이스 ON, 상단 알림 창 (4초뒤 사라짐)
      store.dispatch('common/alarm', {
        title: notification._alert.title,
        body: notification._alert.body,
        code: notification._data.code,
        value: notification._data.value
      })
    }
    // background, active, inactive
    // background 여부만 확인해서 처리하면 됨
  })

  window.fdpbridge.addEventListener('APNS.register', (token) => {
    console.log('APNS.register', JSON.stringify(token))
    apnsInfoObject.token = token
  })

  window.fdpbridge.addEventListener('APNS.registrationError', (error) => {
    console.log('APNS.registrationError', JSON.stringify(error))
  })

  setTimeout(() => {
    window.fdpbridge.execAsync('APNS.requestPermissions').then((success) => {
      console.log('APNS.requestPermissionsHybrid')
      console.log(JSON.stringify(success))
    }).catch((error) => {
      console.log('APNS.requestPermissionsHybrid')
      console.log(JSON.stringify(error))
    })
  }, 1000)
}
