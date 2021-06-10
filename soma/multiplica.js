const aleatorio = (min, max) =>
Math.floor(Math.random() * (max - min + 1)) + min

var numero1 = parseInt(aleatorio(1, 10));
var numero2 = parseInt(aleatorio(1, 10));
var soma = parseInt(numero1 * numero2);
var resultado = "Qual a multiplicação de:  " + numero1 + " x " + numero2 + " ?";
let btnChange = document.querySelector('#checar');
let btnChange2 = document.querySelector('#startOne');
let btnChangeOne = document.querySelector('#startTwo');

function changeMulti(){
    document.getElementById("mudar").innerHTML = (resultado);    
}

function atualizaMulti(){
    window.location.reload();
}

function mudaBtn(){
    btnChange2.addEventListener('click', () => 
    btnChangeOne.style.backgroundColor='#ee1d52',
    btnChange.style.backgroundColor='#42f548',
    btnChange2.style.backgroundColor='#ee1d52')  
}

function mudaBtn1(){
    btnChange.addEventListener('click', () =>      
    btnChange2.style.backgroundColor='#ee1d52',
    btnChange.style.backgroundColor='#ee1d52', 
    btnChangeOne.style.backgroundColor='#42f548',
    )  
}

function conferirMulti() {    
    var conf = document.querySelector(".confere").value;
    if (conf == soma){
        Swal.fire({
            title: 'Parabéns!!!',
            text: 'Você acertou!!!',
            imageUrl: 'image/sim.jpg',
            imageWidth: 300,
            imageHeight: 300,
            imageAlt: 'image/sim.jpg',
            backdrop: ` rgba(255,255,0,0.4)
            url("image/acerto.png")
            center top
            1.35rem
            no-repeat`
            
          })
       
        }else if (conf == "") {            
            Swal.fire({
                title: 'ERROOO!!!',
                text: 'Favor digitar sua resposta!!!',
                imageUrl: 'image/nao.jpg',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'image/nao.jpg',
                backdrop: ``
            }) }else { 
            Swal.fire({
                title: 'Que triste!!!',
                text: 'Você errou!!!',
                imageUrl: 'image/nao.jpg',
                imageWidth: 300,
                imageHeight: 300,
                imageAlt: 'image/nao.jpg',
                backdrop: ` rgba(0,0,255,0.4)
                            url("image/erro.png")
                            center top
                            2rem
                            no-repeat`
              })
        
    }
}