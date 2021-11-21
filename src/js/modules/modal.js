export default function modal() {
  const openBtn = document.querySelector('[data-modal=open]')
  const closeBtn = document.querySelector('[data-modal=close]')
  const containerModal = document.querySelector('[data-modal=container')

  if (openBtn && closeBtn && containerModal) {
    function toggleModal(event) {
      event.preventDefault()
      containerModal.classList.toggle('active')
    }

    function clickOutModal(event) {
      if (event.target === this) toggleModal(event)
    }

    openBtn.addEventListener('click', toggleModal)
    closeBtn.addEventListener('click', toggleModal)
    containerModal.addEventListener('click', clickOutModal)
  }
}
