import firebase from 'firebase/app'; // Necessary for the core functionalities for firebase
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyC7YKcET5z7KV2iOYsOcgATh0FqHefHGLA",
  authDomain: "crwn-db-1d69e.firebaseapp.com",
  databaseURL: "https://crwn-db-1d69e.firebaseio.com",
  projectId: "crwn-db-1d69e",
  storageBucket: "crwn-db-1d69e.appspot.com",
  messagingSenderId: "575343436725",
  appId: "1:575343436725:web:a1106d1913f2da7dca2ffc",
  measurementId: "G-3CS0GGYXY4"
};

// Initialization
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// popup to select from Google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); //The provider is of Google's currently

// adding user to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; // if userAuth is null, return.

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user');
    }
  }

  return userRef;
}



export default firebase;


