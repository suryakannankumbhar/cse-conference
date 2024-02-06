import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBFXoT0rQjccnIuKS4T-X4qK68Zec2GxRM',
    authDomain: 'cse-conference-f7384.firebaseapp.com',
    projectId: 'cse-conference-f7384',
    storageBucket: 'cse-conference-f7384.appspot.com',
    messagingSenderId: '1074093554039',
    appId: '1:1074093554039:web:7ef08da58d4190efb04972',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const pdfDB = getStorage(app);
const txtDB = getFirestore(app);

export { pdfDB, txtDB };
