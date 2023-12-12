import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,

  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,

  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE,

  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MSENDER_ID,

  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const signGoogle = async () => {
  try {
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential: any = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });

  } catch (error) {
    console.log(error);
    
  }
}


export const signUp = async (email: string, password: string) => {
  try {

    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    return newUser
    
  } catch(err: any) {
    console.log(err.message);
    
    return
  }
}

export const signIn = async (email: string, password: string) => {
  try {

    const getUser = await signInWithEmailAndPassword(auth, email, password)
    return getUser
    
  } catch(err: any) {
    console.log(err.message);
    
    return
  }
}


export const logOut = async () => {
  try {
    const out = await signOut(auth);
  } catch (error) {
    console.log(error);
    
  }
}

