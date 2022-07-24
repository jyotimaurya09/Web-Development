import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDif7GEXqfR97vajnL_aeLB_YvW8WhafWw",
    authDomain: "linked-clone-01.firebaseapp.com",
    projectId: "linked-clone-01",
    storageBucket: "linked-clone-01.appspot.com",
    messagingSenderId: "908030641215",
    appId: "1:908030641215:web:dcf231b9400d1ed154e48a",
    measurementId: "G-10F4QX1X0B"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);