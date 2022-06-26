'use strict'


const nome = document.getElementById("name")
const email = document.getElementById("email")
const pass = document.getElementById("pass")
const confirmPass = document.getElementById("confirmPass")
const cep = document.getElementById("cep")
const end = document.getElementById("end")
const num = document.getElementById("num")
const bairro = document.getElementById("bairro")
const city = document.getElementById("city")
const state = document.getElementById("state")

nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 3 ){
        nome.parentElement.setAttribute('class', 'box-dados error')
    }else{
        nome.parentElement.setAttribute('class', 'box-dados success')
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 10){   
        email.parentElement.setAttribute('class', 'box-dados error')
    }else{
        email.parentElement.setAttribute('class', 'box-dados success')
    }
})

pass.addEventListener('keyup', ()=>{
    if(pass.value.length <= 7){   
        pass.parentElement.setAttribute('class', 'box-dados error')
    }else{
        pass.parentElement.setAttribute('class', 'box-dados success')
    }
})

confirmPass.addEventListener('keyup', ()=>{
    if(confirmPass.value !== pass.value){   
        confirmPass.parentElement.setAttribute('class', 'box-dados error')
    }else{
        confirmPass.parentElement.setAttribute('class', 'box-dados success')
    }
})


cep.addEventListener('keyup', ()=>{
    if(cep.value.length != 8){   
        cep.parentElement.setAttribute('class', 'box-dados error')
    }else{
        cep.parentElement.setAttribute('class', 'box-dados success')
    }
})

num.addEventListener('keyup', ()=>{
    if(num.value.length < 1){   
        num.parentElement.setAttribute('class', 'box-dados error')
    }else{
        num.parentElement.setAttribute('class', 'box-dados success')
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 10){   
        email.parentElement.setAttribute('class', 'box-dados error')
    }else{
        email.parentElement.setAttribute('class', 'box-dados success')
    }
})

email.addEventListener('keyup', ()=>{
    if(email.value.length <= 10){   
        email.parentElement.setAttribute('class', 'box-dados error')
    }else{
        email.parentElement.setAttribute('class', 'box-dados success')
    }
})

state.addEventListener('keyup', ()=>{
    if(state.value.length < 1){   
        state.parentElement.setAttribute('class', 'box-dados error')
    }else{
        state.parentElement.setAttribute('class', 'box-dados success')
    }
})

function inserirClassErro(item){   
    item.parentElement
        .setAttribute('class', 'box-dados error')

    return item
}

function InserirClassSuccess(item){ 
    item.parentElement
        .removeAttribute('class', 'box-dados error')  
    item.parentElement
        .setAttribute('class', 'box-dados success')
    return item
}
// --------------Função para utilizar a validação de CEP -------------------------

//Esse é um modo mais complicado de usar uma API pois retorna muitas promessas

// function pesquisarCep(){
//     const cep = document.getElementById('cep').value;
//     const url = `http://viacep.com.br/ws/${cep}/json/`;
    
//     const data = fetch(url).then(response =>response.json())
//     .then(console.log)
//     console.log(data.cep);
// }
//-------------------------------------------------------

//Função async / await é uma forma mais otimizada de chamarmos uma API pois como temos muitas promisses, fica mais facil a leitura da função

const pesquisarCep = async() =>{
    const cep = document
        .getElementById('cep').value;

    if(cep.length !== 8){
        alert('cep invalido');

    }else{
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url)
        const dados = await response.json()
        preencherForm(dados)  
        checkEndereco()
    }
}

//------------ Função para inserir os dados nos inputs---------------

function preencherForm(endereco){
    document.querySelector('#end').value = endereco.logradouro
    document.querySelector('#bairro').value = endereco.bairro
    document.querySelector('#city').value = endereco.localidade
    document.querySelector('#state').value = endereco.uf
}

function checkEndereco(){
    // const end = document.getElementById("end")
    const bairro = document.getElementById("bairro")
    const city = document.getElementById("city")
    const state = document.getElementById("state")

    if(end.value !=="" && bairro.value !== "" && city.value !==""  && state.value !==""){
        end.parentElement.setAttribute('class', 'box-dados success')
        bairro.parentElement.setAttribute('class', 'box-dados success')
        city.parentElement.setAttribute('class', 'box-dados success')
        state.parentElement.setAttribute('class', 'box-dados success')
    }else{
        end.parentElement.setAttribute('class', 'box-dados error')
        bairro.parentElement.setAttribute('class', 'box-dados error')
        city.parentElement.setAttribute('class', 'box-dados error')
        state.parentElement.setAttribute('class', 'box-dados error')
    }
}

//devido a função async estar dentro de uma const precisamos passar a chamada da função depois

cep.addEventListener('focusout', pesquisarCep)
cep.addEventListener('keypress', ()=>{
    if(key === "Enter"){
        console.log("clicou")
    }
})

// --------------funcao de checar o botao-----------------------

const btn = document.querySelector("#btn")
btn.addEventListener("click", checkSave)

function checkSave(){
    const inputs = document.querySelectorAll('input')

    inputs.forEach(item =>{
        if(item.value ===''){
            inserirClassErro(item)
        }else{
            InserirClassSuccess(item)
        }
    })
}