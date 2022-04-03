import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const getLogin = (firebaseApp) => async (email, password) => {
	const auth = getAuth(firebaseApp);

	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		const user = userCredential.user;

		console.log(`User logged in: '${user.email}'`)

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
