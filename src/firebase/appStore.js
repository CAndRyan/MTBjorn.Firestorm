import { initializeApp } from 'firebase/app';
import { getLoginCheck, getAddAuthStateListener, getLogin, getLogout } from './auth';

// const exampleFirebaseConfig = {
// 	apiKey: "",
// 	authDomain: "",
// 	databaseURL: "",
// 	projectId: "",
// 	storageBucket: "",
// 	messagingSenderId: "",
// 	appId: ""
// };

const defaultDriverConfig = {
	cacheFileUploadMetadata: false,
	enableAuthPersistence: true
};

const firebaseAppStore = {};

let activeFirebaseApp = null;

export const registerFirebaseApp = (appName, appConfig, driverConfig = defaultDriverConfig) => {
	const app = initializeApp(appConfig);
	
	firebaseAppStore[appName] = {
		app,
		isUserLoggedIn: getLoginCheck(app),
		addAuthStateListener: getAddAuthStateListener(app),
		login: getLogin(app, driverConfig.enableAuthPersistence),
		logout: getLogout(app),
		config: driverConfig
	};
};

const getFirebaseApp = (appName) => firebaseAppStore[appName];

export const setActiveFirebaseApp = (appName) => {
	activeFirebaseApp = appName;
};

export const getActiveFirebaseApp = () => {
	if (!activeFirebaseApp)
		throw "No Firebase app is set as active";
	
	return getFirebaseApp(activeFirebaseApp);
};
