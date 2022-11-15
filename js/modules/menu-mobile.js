function outsideClick(element, events, callback) {
  const html = document.documentElement
  const outside = 'data-outside'

  if (!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick)
      })
    })
    element.setAttribute(outside, '')
  }

  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside)
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick)
      })
      callback()
    }
  }
}

function initMenuMobile() {
  const menuMobile = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')
  const events = ['click', 'touchstart']
  const classe = 'active'

  if (menuMobile) {
    function openMenu(event) {
      menuList.classList.add(classe)
      menuMobile.classList.add(classe)

      outsideClick(menuList, events, () => {
        menuList.classList.remove(classe)
        menuMobile.classList.remove(classe)
      })
    }

    events.forEach(evento => menuMobile.addEventListener(evento, openMenu))
  }
}
