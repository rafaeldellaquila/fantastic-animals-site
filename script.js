function linkToImage() {
  const AnimalImageContent = document.querySelectorAll(
    '.animalSection > .images li'
  ); //chamando minhas tags de imagens
  const AnimalDescriptionContent = document.querySelectorAll(
    '.animalSection > .descriptions > .description'
  ); //chamando minhas tags de texto

  //checando se tem, pra não bugar o site caso não entre as classes
  if (AnimalImageContent.length && AnimalDescriptionContent.length) {
    //pra deixar ativo o primeiro, sim, eu sei que da pra fazer isso direto no css também
    AnimalDescriptionContent[0].classList.add('active');
    //ativando e desativando a classe que vai mostrar ou não conteudos de texto
    function activeContent(index) {
      AnimalDescriptionContent.forEach((description) => {
        description.classList.remove('active');
      });
      AnimalDescriptionContent[index].classList.add('active');
    }
    //loop que irá linkar através do index a imagem ao texto
    AnimalImageContent.forEach((image, index) => {
      image.addEventListener('click', () => {
        activeContent(index);
      });
    });
  }
}
linkToImage();

function accordionList() {
  const faqSection = document.querySelectorAll(
    '.faqSection > .questions > .query'
  );
  if (faqSection.length) {
    function activeAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    faqSection.forEach((query) => {
      query.addEventListener('click', activeAccordion);
    });
  }
}
accordionList();
