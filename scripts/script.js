'use strict'

const inputBox = document.querySelectorAll('input')
inputBox.forEach(item =>{
    item.setAttribute('onblur', 'check()')
})


const btn = document.querySelector("#btn")
btn.addEventListener("click", check)

function check(){
    const inputs = document.querySelectorAll('input')

    inputs.forEach(item =>{
        if(item.value ===''){
            erro(item)
            // console.log("preencha todos os campos");
        }else{
            success(item)
        }
    })
}

function erro(item){   
    item.parentElement.setAttribute('class', 'box-dados error')

    return item
}

function success(item){   
    item.parentElement.setAttribute('class', 'box-dados success')

    return item
}

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
    const cep = document.getElementById('cep').value;

    if(cep.length !== 8){
        aler( 'cep invalido');

    }else{
        const url = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(url)
        const dados = await response.json()
        console.log(dados.erro);
        preencherForm(dados)  
    }
}

//Criando a função para inserir os dados nos inputs

function preencherForm(endereco){
    document.querySelector('#end').value = endereco.logradouro
    document.querySelector('#bairro').value = endereco.bairro
    document.querySelector('#city').value = endereco.localidade
    document.querySelector('#state').value = endereco.uf
}

//devido a função async estar dentro de uma const precisamos passar a chamada da função depois

document.getElementById("cep").addEventListener('focusout', pesquisarCep)

// Fazendo a validação dos campos se estão preechidos ou não

// const divInputs = document.querySelectorAll('input')

// function checkInputs(inputs){
//     console.log(inputs)
//     inputs.forEach((item)=>{
//         console.log(item.value);
//     })
// }
// checkInputs(divInputs)