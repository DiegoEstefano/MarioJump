const mario = document.querySelector('.mario');  /* Seleciona o mario na div html*/
const pipe = document.querySelector('.pipe');  /* Seleciona o pipe na div html*/
const clouds = document.querySelector('.clouds');  /* Seleciona o pipe na div html*/

const replay = () => {
    window.location.reload()
}

/* Função que adiciona a classe jump do css no mario */
const jump = () => {
    mario.classList.add('jump');

    setTimeout (() => {
        mario.classList.remove('jump');
    }, 500)

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
   
    if (pipePosition <= 120&& pipePosition  > 0 && marioPosition < 105) {

        /*para o cano onde estava quado mario morre*/
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        /*para o mario onde estava quado mario morre*/
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'images/game-over.png';
        mario.style.width = '4.375rem';
        mario.style.marginLeft = '3rem';
        
        /*para a nuvem onde estava quado mario morre*/
        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        
        
        clearInterval(loop);
    }
}, 10) 


/*Evento  que lê a tecla e verifica se é cima ou enter*/
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter" ||  event.key === "ArrowUp"  ) {
        jump();
    }
} );


