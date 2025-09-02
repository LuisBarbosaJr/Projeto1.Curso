function MudarTema(){
    const html = document.documentElement

    //if (html.classList.contains('Claro')) {
    //    html.classList.remove('Claro')
   // } else {
    //    html.classList.add('Claro')
   // }

    html.classList.toggle('Claro')
    const img = document.querySelector('#profile img')


    //Torcar a Imagem
      if (html.classList.contains('Claro')) {
        img.setAttribute('src', './assets/avatar-Claro.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }



}