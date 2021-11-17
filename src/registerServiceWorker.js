import { register } from 'register-service-worker'

if (process.env.VUE_APP_OPEN_SERVICE_WORKER === 'true') {
  register('/service-worker.js', {
    ready (registration) {
      console.log('Service worker registration.')
    },
    registered (registration) {
      console.log('Service worker has been registered.')
    },
    cached (registration) {
      console.log('Content has been cached for offline use.')
    },
    updatefound (registration) {
      console.log('New content is downloading.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
    },
    offline (registration) {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
