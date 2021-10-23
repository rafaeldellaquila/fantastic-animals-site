export default function smoothScroll() {
  const internalLinks = document.querySelectorAll(
    '[data-animation="smooth"] a[href^="#"] '
  ) // chamando meus links internos
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection)
  })

  function scrollToSection(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    //chamando minha sessão ligando-a com o menu
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    }) //scroll suave no centro
  }
}
