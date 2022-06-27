import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCZQUDdtwhU8metzZgMPbsqJPks1r7pIO8",
  authDomain: "projeto-cadastro-2d662.firebaseapp.com",
  projectId: "projeto-cadastro-2d662",
  storageBucket: "projeto-cadastro-2d662.appspot.com",
  messagingSenderId: "211310037987",
  appId: "1:211310037987:web:a95c8020ba6ffab2556ed6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginEmail = document.getElementById('loginemail')
const loginPass = document.getElementById('loginpass')

document.getElementById('btnlogin').addEventListener('click', ()=>{

  const auth = getAuth();
signInWithEmailAndPassword(auth, loginEmail.value, loginPass.value)
  .then((userCredential) => {

    const user = userCredential.user;

    alert('Usuario conectado')
    window.location.href = 'http://127.0.0.1:5500/FirstCadastro/home.html'

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    alert('Usuario ou senha invalidos')
    reset()
  });
})

const reset = ()=>{
  loginEmail.value=''
  loginPass.value =''
}

