function linkToImage() {
  const AnimalImageContent = document.querySelectorAll(
    '.animalSection > .images li'
  ) //chamando minhas tags de imagens
  const AnimalDescriptionContent = document.querySelectorAll(
    '.animalSection > .descriptions > .description'
  ) //chamando minhas tags de texto

  //checando se tem, pra não bugar o site caso não entre as classes
  if (
    AnimalImageContent.length &&
    AnimalDescriptionContent.length
  ) {
    //pra deixar ativo o primeiro, sim, eu sei que da pra fazer isso direto no css também
    AnimalDescriptionContent[0].classList.add('active')
    //ativando e desativando a classe que vai mostrar ou não conteudos de texto
    function activeContent(index) {
      AnimalDescriptionContent.forEach((description) => {
        description.classList.remove('active')
      })
      AnimalDescriptionContent[index].classList.add('active')
    }
    //loop que irá linkar através do index a imagem ao texto
    AnimalImageContent.forEach((image, index) => {
      image.addEventListener('click', () => {
        activeContent(index)
      })
    })
  }
}

function accordionList() {
  const faqSection = document.querySelectorAll(
    '.faqSection > .questions > .query'
  ) //chamando minhas perguntas
  if (faqSection.length) {
    function activeAccordion() {
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('active')
    } //mudando a classe que esconde as respostas

    faqSection.forEach((query) => {
      query.addEventListener('click', activeAccordion)
    }) //adicionando o evento
  }
}

function smoothScroll() {
  const internalLinks = document.querySelectorAll(
    '.headerMenu > .list a[href^="#"] '
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

function scrollAnimation() {
  const sections = document.querySelectorAll('.gridLayout')
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.5
    function animateScroll() {
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

linkToImage()
accordionList()
smoothScroll()
scrollAnimation()
