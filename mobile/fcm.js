import { EventBus } from '@/mobile'
import store from '@/store'

/**
1. 앱 밖에서 호출 시 (상단 Notification Click)
 => EventBus.$emit('FCMEvent.Notification', result)
2. 앱 보고 있는 중 푸시가 왔을 경우
 => store.dispatch('common/alarm', notidata)
 */

// 상단 Notification으로 부터 받은 fcm intent 전달
export const getInitialNotification = () => {
  window.fdp.fcm.getInitialNotification().then(notidata => {
    const result = notidata && notidata.data ? notidata.data : {}
    const messageId = result['google.message_id']
    if (result.title && window.messageId !== messageId) {
      // alert('init --> ' + JSON.stringify(result) + '---' + result.params)
      // alert(window.messageId + ' / ' + messageId)
      EventBus.$emit('FCMEvent.Notification', result)
      window.messageId = messageId
    }
  }).catch(error => {
    console.log(error)
  })
}

export const registerFcmEvent = () => {
  window.fdpbridge.addEventListener('FCMEvent.Notification', (notidata) => {
    // if (notidata.opened_from_tray && notidata.id !== undefined) {
    if (notidata.opened_from_tray) {
      // 상단 노티를 탭하여 들어온 경우
      // (홈버튼으로 앱을 백그라운드로 내린 상태, 런처에서 앱 아이콘을 터치하여 들어왔을 경우) 의 케이스에는 notif.id 가 존재하지 않음
      const result = notidata && notidata.fcm && notidata.fcm.title ? notidata.fcm : notidata
      // alert('fcm1 --> ' + JSON.stringify(notidata))
      const messageId = notidata['google.message_id']
      if (result.title && window.messageId !== messageId) {
        EventBus.$emit('FCMEvent.Notification', notidata)
        window.messageId = messageId
      }
    } else if (!notidata.opened_from_tray) {
      // 프로세스가 살아 있을 때 푸시 메세지를 수신한 경우
      const result = notidata && notidata.fcm && notidata.fcm.title ? notidata.fcm : notidata
      // alert('fcm2 --> ' + JSON.stringify(notidata))

      const messageId = notidata['google.message_id']
      if (result.title && window.messageId !== messageId) {
        // 디바이스 ON, 상단 알림 창 (4초뒤 사라짐)
        store.dispatch('common/alarm', notidata)
        window.messageId = messageId
      }
    }
  })

  window.fdpbridge.addEventListener('FCMEvent.RefreshToken', (token) => {
    EventBus.$emit('FCMEvent.RefreshToken', token)
  })
}
