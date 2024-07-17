import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMp46EAkcUxbJL7kHVZohUBkz1jc4WN7E",
    authDomain: "fir-tutorial-69f22.firebaseapp.com",
    projectId: "fir-tutorial-69f22",
    storageBucket: "fir-tutorial-69f22.appspot.com",
    messagingSenderId: "301336398458",
    appId: "1:301336398458:web:6480fb917e28c12e2389c3"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'books');

getDocs(colRef).then((snapshot) => {
    // console.log(snapshot.docs)
    let books = []
    snapshot.docs.forEach(doc => {
        books.push({ ...doc.data(), id: doc.id })
    })
    console.log(books)
}).catch((err) => {
    console.log(err)
})

