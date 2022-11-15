export default function endOfTheSite() {}
const button = document.querySelector('.back-to-top')
const classeButton = 'ativo'

function animaScrollbutton() {
  if (window.scrollY > 300) button.classList.add(classeButton)
  else button.classList.remove(classeButton)
}

window.addEventListener('scroll', animaScrollbutton)

function InicioDoSite() {
  window.scrollTo(0, 0)
}

button.addEventListener('click', InicioDoSite)

document.body.onresize = function () {
  if (document.body.clientWidth < 700) button.textContent = '↑'
  else button.textContent = 'Voltar ao topo ↑'
}
