import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
	apiKey: 'AIzaSyAVUHnpUX-LlTajkwuQP98_DZU2YxaE3rs',
	authDomain: 'crwn-db-20e5f.firebaseapp.com',
	databaseURL: 'https://crwn-db-20e5f.firebaseio.com',
	projectId: 'crwn-db-20e5f',
	storageBucket: '',
	messagingSenderId: '940140035556',
	appId: '1:940140035556:web:6efce61ed917297c',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
