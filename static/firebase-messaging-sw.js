
importScripts(
  'https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyAgIfAe0X3oj0i0iBDVBFbCOlpjV19APWs","authDomain":"menu-wrap.firebaseapp.com","databaseURL":"https:\u002F\u002Fmenu-wrap.firebaseio.com","projectId":"menu-wrap","storageBucket":"menu-wrap.appspot.com","messagingSenderId":"653492366805","appId":"1:653492366805:web:f9a48366b85d7707f4215c","measurementId":"G-15RRVPEW8P"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"randomName","url":"randomUrl"}]
  const action = actions.find(x => x.id === e.action.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
