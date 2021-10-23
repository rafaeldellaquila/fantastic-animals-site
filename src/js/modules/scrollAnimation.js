export default function scrollAnimation() {
  const sections = document.querySelectorAll('[data-animation="scroll"]')

  function animateScroll() {
    if (sections.length) {
      const halfWindow = window.innerHeight * 0.5
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const visibleSection = sectionTop - halfWindow < 0

        if (visibleSection) {
          section.classList.add('active')
        }
      })
    }
  }

  animateScroll()
  window.addEventListener('scroll', animateScroll)
}
