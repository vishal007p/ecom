import firebase, { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Add your Firebase project configuration here

  apiKey: "AIzaSyAlGcdfsVfM0Vxm2nZMTDE36azzpwsOE60",
  authDomain: "phone-e2dac.firebaseapp.com",
  projectId: "phone-e2dac",
  storageBucket: "phone-e2dac.appspot.com",
  messagingSenderId: "120447036854",
  appId: "1:120447036854:web:8cf5a6c28d5ef271972517"
};

const app=initializeApp(firebaseConfig);

const auth=getAuth(app)
export  {app,auth}