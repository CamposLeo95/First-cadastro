import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
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

document.getElementById("btn").addEventListener("click", () => {
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");

  createUserWithEmailAndPassword(auth, email.value, pass.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(`Usuario cadastrado com sucesso`);
      window.location.href = 'http://127.0.0.1:5500/index.html'

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert("Erro ao cadastrar usuario");
    });
});

