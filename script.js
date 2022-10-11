function load() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`

  if ( hora >= 0 && hora < 12 ){
    //Bom dia
    img.src = 'imagens/manha.jpg' 
    document.body.style.background = '#f2c259'
    msg.innerHTML = `Agora são ${hora} horas, <strong>BOM DIA</strong>`

  }else if ( hora > 12 && hora < 18){
    //Boa tarde
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#f07a35'
    msg.innerHTML = `Agora são ${hora} horas, <strong>BOA TARDE</strong>`
    
  }else {
    //Boa noite
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#343741'
    msg.innerHTML = `Agora são ${hora} horas, <strong>BOA NOITE</strong>`

  }
}