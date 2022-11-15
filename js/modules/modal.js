export default function initModal() {}
const btnAbrir = document.querySelectorAll('[data-modal="abrir"]')
const btnFechar = document.querySelectorAll('[data-modal="fechar"]')
const containerModal = document.querySelector('[data-modal="container"]')

const activeClass = 'ativo'

/*if (btnAbrir && btnFechar && containerModal) {*/
function toggleModal(event) {
  event.preventDefault()
  containerModal.classList.toggle(activeClass)
}

function cliqueForaModal(event) {
  if (event.target === this) toggleModal(event)
}

btnFechar.forEach(btn => {
  btn.addEventListener('click', toggleModal)
})

btnAbrir.forEach(btn => {
  btn.addEventListener('click', toggleModal)
})

containerModal.addEventListener('click', cliqueForaModal)
/*}*/
