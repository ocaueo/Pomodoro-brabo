let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

for(let i = 0; i < lis.length; i++){
    lis[i].addEventListener('click', function(){
        removeActive();
        lis[i].classList.add('active');
        ul.style = `--left: ${(i * 120) + 8}px`;
    });
}

function removeActive(){
    for(let i = 0; i < lis.length; i++){
        lis[i].classList.remove('active');
    }
}

/* function desenhaSegundos(){
    let context = segundos.getContext('2d');
    context.beginPath();
    context.arc(100, 75, 50, angulo  * Math.PI);
    context.fillStyle = #FF0000;
    context.stroke();
} 

let inicio = 0 */

let config = document.querySelector('.configuracoes');
settings.onclick = function(){
    config.classList.add('active');
}

fecharSettings.onclick = function(){
    config.classList.remove('active');
}

let tempo1 =number(localStorage.getItem('tempo1')) || 0;
let tempo2 =number(localStorage.getItem('tempo2')) || 0;
let tempo3 =number(localStorage.getItem('tempo3')) || 0;

confirmar.onclick = function(){
    tempo1 = pomodoroTime.value;
    tempo2 = shortTime.value;
    tempo3 = longTime.value;
    
    localStorage.setItem('tempo1', tempo1);
    localStorage.setItem('tempo2', tempo2);
    localStorage.setItem('tempo3', tempo3);
    
};

state.onclick = function(){
    
}
*/
function contaSegundos(){
    let segundos =0;
    setInterval(function(){
        if(segundos <59){
            segundos = segundos + 1;
            hora.innerHTML = segundos;
            
        }else
    }
}

/*