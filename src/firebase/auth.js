import { getAuth, signInWithEmailAndPassword, signOut, browserLocalPersistence, setPersistence, onAuthStateChanged } from "firebase/auth";

export const getLoginCheck = (firebaseApp) => async (email) => {
	const auth = getAuth(firebaseApp);

	if (!email)
		return auth && auth.currentUser;
	
	return auth && auth.currentUser && auth.currentUser.email === email;
};

export const getAddAuthStateListener = (firebaseApp) => (onAuthStateChangedHandler) => {
	const auth = getAuth(firebaseApp);

	return onAuthStateChanged(auth, onAuthStateChangedHandler);
};

export const getLogin = (firebaseApp, enableAuthPersistence) => async (email, password) => {
	const auth = getAuth(firebaseApp);

	try {
		if (enableAuthPersistence)
			await setPersistence(auth, browserLocalPersistence);

		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;

		console.log(`User logged in: '${user.email}'`);

		return user;
	}
	catch ({ code, message }) {
		throw `[${code}] ${message}`;
	}
};

export const getLogout = (firebaseApp) => async () => {
	const auth = getAuth(firebaseApp);

	try {
		await signOut(auth);
	}
	catch (error) {
		console.log(error);
	}
};
