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

/* -- Initialization -- */
firebase.initializeApp(config);

/* -- To use these libraries throughout the app -- */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* -- SignInWithGoogle Popup -- */
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); //The provider is of Google's currently

/* -- Adding User to firestore database -- */
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return; // if userAuth is null, return.

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth; //displayName is null if invoked by the SignUp component
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
  };
  return userRef;
};


/* -- Adding shop details to firestore. Just One Time -- */
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  console.log('objectsToAdd', objectsToAdd, typeof(objectsToAdd))
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);
  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};


/* --  Convert the collections into an object -- */
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;


