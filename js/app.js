let input = document.querySelector('#text');
let resultados = document.querySelector('#results')
let all = document.querySelector('#all');
let active = document.querySelector('#active');
let completed = document.querySelector('#completed');
let modo = document.querySelector('.night');


all.addEventListener('click',todas);
active.addEventListener('click', activas);
completed.addEventListener('click', completas);
input.addEventListener('keypress', datosInput);
modo.addEventListener('click', cambiarModo)


function datosInput(e){
    teclaEnter = event.keyCode;

    if(teclaEnter == 13){
        let table = document.createElement('tr');
        let resultadoFinal = document.querySelector('#resultados');

        
        table.classList.add('lista');
        table.classList.add('noComplete')

        table.innerHTML = `
            <td><input type="checkbox" class="checkbox" id="checkboxDos" onChange="completo(this)"></td>
            <td class="value">${input.value}</td>
            <td><span onClick="borrar(this)" class="borrar"><img src="../images/icon-cross.svg"></span></td>
        `
        resultados.appendChild(table);


        input.value = '';
    }
}

function completo(e){
    e.parentElement.parentNode.classList.toggle('complete');
    e.parentElement.parentNode.classList.toggle('noComplete')
}

function todas(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');

    tareasCompletas.forEach(elem => {
        elem.style.display = 'block'
        elem.classList.add('lista')
    });

    tareasNoCompletas.forEach(elem => {
        elem.style.display = 'block';
        elem.classList.add('lista')
    })
}

function activas(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');

    tareasCompletas.forEach(elem => {
        elem.style.display = 'none'
    });

    tareasNoCompletas.forEach(elem => {
        elem.style.display = 'block'
    });
}

function completas(){
    let tareasCompletas = document.querySelectorAll('.complete');
    let tareasNoCompletas = document.querySelectorAll('.noComplete');

    tareasCompletas.forEach(elem => {
        elem.style.display = 'block'
    });

    tareasNoCompletas.forEach(elem => {
        elem.style.display = 'none'
    });
}

function borrar(e){
    e.parentElement.parentElement.remove();
}

function cambiarModo(){

    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    let options = document.querySelector('.options');
    let optionsLinks = document.querySelectorAll('.options a')
    let input = document.querySelector('input[type=text]')
    let table = document.querySelector('table')
    let luna = document.querySelector('.luna');
    let sol = document.querySelector('.sol');

  
    options.classList.toggle('focus-dark')
    
    if(luna.classList.contains('luna')){
        luna.classList.toggle('mostrar-luz')
        sol.classList.toggle('mostrar-dark')
    }
    
    body.classList.toggle('dark')

    container.classList.toggle('container-dark')
   
    options.classList.toggle('principal-dark')
    
    optionsLinks.forEach(a => {
        a.style.color = "hsl(233, 14%, 35%)"
    })

    input.classList.toggle('principal-dark')
    table.classList.toggle('principal-dark')

}
