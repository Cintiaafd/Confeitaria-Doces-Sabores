import outsideClick from './outsideClick.js'

export default function initMenuMobile() {}
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
