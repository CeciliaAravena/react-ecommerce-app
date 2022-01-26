import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChqAoJG9Rs1eewHwC7ucQNtoWlfY3y4TA",
  authDomain: "e-commerce-arapp.firebaseapp.com",
  projectId: "e-commerce-arapp",
  storageBucket: "e-commerce-arapp.appspot.com",
  messagingSenderId: "265512461281",
  appId: "1:265512461281:web:d3bdcdbd59619868da68a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app
}