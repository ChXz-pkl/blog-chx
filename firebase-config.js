// Import fungsi yang dibutuhkan dari SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Konfigurasi Firebase dari akun Anda
const firebaseConfig = {
    apiKey: "AIzaSyBRH26mLBpS--L6dKa1vqcaQFDueM7qrQQ",
    authDomain: "blog-chx.firebaseapp.com",
    projectId: "blog-chx",
    storageBucket: "blog-chx.appspot.com", // Format yang benar
    messagingSenderId: "368034658690",
    appId: "1:368034658690:web:86eca50770d7c439e6379b",
    measurementId: "G-8S45CK4QGF"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Ekspor service Firebase yang akan digunakan di file lain
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);