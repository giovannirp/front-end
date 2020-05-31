function movimenta() {
    var elemento = document.getElementById("animacao");   
    var posicao = 0;
    var id = setInterval(quadro, 1);
    function quadro() {
      if (posicao == 350) {
        clearInterval(id);
      } else {
        posicao++; 
        elemento.style.top = posicao + "px"; 
        elemento.style.left = posicao + "px"; 
      }
    }
  }