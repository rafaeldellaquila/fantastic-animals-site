export default function accordionList() {
  const faqSection = document.querySelectorAll('[data-animation="accordion"]') //chamando minhas perguntas
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
