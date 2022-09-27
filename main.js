function tocaSom (idTagAudio) {
    document.querySelector(idTagAudio).play(); 
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 

let contador = 0;

//enquanto
while(contador < listaDeTeclas.length) { 

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio); Bom para verificar se no navegador aparece tudo correto, mas não precisa estar no código.


    tecla.onclick =  function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;

    //console.log(contador); //console do DevTools, a função log manda mensagem para o console do navegador. Bom para verificar se no navegador aparece tudo correto, mas não precisa estar no código.


}
