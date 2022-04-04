# Firestorm

An interface for interacting with Google Firebase data storage.

## Getting Started

1. Get app config for your Firebase app from the Project Settings page
1. Setup the active Firebase app

    ````javascript
    import { setupActiveFirebaseApp } from '@mtbjorn/firestorm';
    setupActiveFirebaseApp({
		appName: userImageUploaderFirebaseAppName,
		appConfig: userImageUploaderFirebaseConfig,
		driverConfig: firebaseDriverConfig
	});
    ````

    * TODO: support for managing multiple Firebase apps
1. Login to the active Firebase app

    ````javascript
    import { getActiveFirebaseApp } from '@mtbjorn/firestorm';
    const { login } = getActiveFirebaseApp();
    await login('email', 'password');
    ````

1. Login to the active Firebase app

    ````javascript
    import { getActiveFirebaseApp } from '@mtbjorn/firestorm';
    const { logout } = getActiveFirebaseApp();
    await logout();
    ````

1. Upload a file to storage

    ````javascript
    import { uploadFile } from '@mtbjorn/firestorm';
    const url = await uploadFile('fileName', file, 'imagesDirectory');
    ````
