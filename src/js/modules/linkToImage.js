export default function linkToImage() {
  const AnimalImageContent = document.querySelectorAll(
    '.animalSection > .images li'
  ) //chamando minhas tags de imagens
  const AnimalDescriptionContent = document.querySelectorAll(
    '.animalSection > .descriptions > .description'
  ) //chamando minhas tags de texto

  //checando se tem, pra não bugar o site caso não entre as classes
  if (AnimalImageContent.length && AnimalDescriptionContent.length) {
    const defaultDirection = AnimalDescriptionContent[0].dataset.animation
    AnimalDescriptionContent[0].classList.add('active', defaultDirection)
    //ativando e desativando a classe que vai mostrar ou não conteudos de texto
    function activeContent(index) {
      AnimalDescriptionContent.forEach((description) => {
        description.classList.remove('active')
      })

      const direction = AnimalDescriptionContent[index].dataset.animation
      AnimalDescriptionContent[index].classList.add('active', direction)
    }
    //loop que irá linkar através do index a imagem ao texto
    AnimalImageContent.forEach((image, index) => {
      image.addEventListener('click', () => {
        activeContent(index)
      })
    })
  }
}
