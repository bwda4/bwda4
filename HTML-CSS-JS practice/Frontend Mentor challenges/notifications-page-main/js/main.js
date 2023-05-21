// NOTIFICATIONS COLLECTION

/*
  avatar: string
  userName: string
  content: string
  date: string
  unread: boolean
  type: string (standar | link | message | picture)
    meta?: objet
      linkType?: string (post | group)
      linkText?: string
      message?: string 
      pictrure?: string

const notificationCollection = [
  {
    avatar: 'assets/images/avatar-mark-webber.webp',
    userName: 'Mark Webber',
    content: 'reacted to your recent post',
    date: '1m ago',
    unread: true,
    type: 'link'
    meta: {
      linkType: 'post',
      linkText: 'My first tournament today!'
    }
  }
]
*/

// GET DOM ELEMENT
const markALLAsReadElement = document.querySelector('.header__link')
const unreadCountElement = document.querySelector('.unread-count')
const bubblesElement = document.querySelector('.unread-bubble')

// LISTEN FOR CLICK EVENTS
markALLAsReadElement.addEventListener('click', ()=> {
  markALLAsRead()
  resetUnreadCount()
  removeBubbles()
})

// MARK ALL NOTIFICATIONS AS READ

function markALLAsRead() {
  // GET ALL UNREAD NOTIFICATIONS
  const unreadNotifications = document.querySelectorAll('.notification--unread')
  unreadNotifications.forEach(notification => notification.classList.remove('notification--unread'))
  resetUnreadCount()
}

function removeBubbles() {
  const unreadBubbles = document.querySelectorAll('.unread-bubble')
  unreadBubbles.forEach(notification => notification.classList.remove('unread-bubble'))
}

function resetUnreadCount() {
  unreadCountElement.textContent = '0'
}