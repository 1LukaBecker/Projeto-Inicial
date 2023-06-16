function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
  }
}

//substituir a imagem
//se tiver light mode,adicionar a imagem light
//set tiver sem light mode, manter a imagem normal
