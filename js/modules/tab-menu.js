export default function iniTabNav() {}
const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
const tabContent = document.querySelectorAll('[data-tab="content"] section')
const activeClass = 'ativo'

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add(activeClass)

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove(activeClass)
    })
    const direcao = tabContent[index].dataset.anime
    tabContent[index].classList.add(activeClass, direcao)
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index)
    })
  })
}
