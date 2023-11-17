function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, adiocionar a imagem light
    img.setAttribute("src", "./assets/avatar-yan-light.png")
    img.setAttribute("alt", "Foto de Yan Botelho com óculos de pixel")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-yan.png")
    img.setAttribute("alt", "Foto de Yan Botelho")
  }
}
