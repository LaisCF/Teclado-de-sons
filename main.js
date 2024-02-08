 function tocaSom(seletotAudio) {
   const elemento = document.querySelector (seletotAudio);

   if (elemento && elemento.localName === 'audio') {
         elemento.play();
   }
   else {
         console.log('elemento não encontrado ou seletor invalido')
   }
 }

const listaDeTeclas = document.querySelectorAll('.tecla');

for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

   const tecla = listaDeTeclas[contador];
   const instrumento = listaDeTeclas[contador].classList[1];
   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function() {
      tocaSom(idAudio);
   }

   tecla.onkeydown = function(evento) {

      if(evento.code ==='Space' || evento.code ==='Enter') {
         tecla.classList.add('ativa');
      }

      if (evento.code === 'Enter') {
         tecla.classList.add('ativa');
      }
   }

   tecla.onkeyup = function() {
      tecla.classList.remove('ativa');
   }

};
