import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBf5hWLT5xX-P09vha8w9waGqXnhzAY3c",
  authDomain: "cursocoderhousereact.firebaseapp.com",
  projectId: "cursocoderhousereact",
  storageBucket: "cursocoderhousereact.appspot.com",
  messagingSenderId: "514010129148",
  appId: "1:514010129148:web:292cb772f8115562956d79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>

    <App />
    
    </ChakraProvider>
)
