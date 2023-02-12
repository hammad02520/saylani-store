import { initializeApp } from "firebase/app";
import { getAuth,  } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAGgdLdgP0pD9AosEBhJ3l4scm2evXDr0E",
  authDomain: "quiz-49e60.firebaseapp.com",
  projectId: "quiz-49e60",
  storageBucket: "quiz-49e60.appspot.com",
  messagingSenderId: "471933171025",
  appId: "1:471933171025:web:387c6bc7cdbb97d8124f70",
  measurementId: "G-B4RCWZNR3D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app , auth}