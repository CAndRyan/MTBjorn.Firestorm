import { getStorage, ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import { getActiveFirebaseApp } from './appStore';
import { cacheFileUpload } from './dataCache';

const getDownloadUrl = async (storageRef) => {
	try {
		return await getDownloadURL(storageRef);
	}
	catch (reason) {
		throw `Error getting download URL: ${reason}`;
	}
};

const uploadFile = async (fileName, file, storageDirectory) => {
	const { app, config } = getActiveFirebaseApp();
	const storage = getStorage(app);
	const storageRef = ref(storage, `${storageDirectory}/${fileName}`);

	try {
		const { metadata } = await uploadBytes(storageRef, file);
		const downloadUrl = await getDownloadUrl(storageRef);

		if (config.cacheFileUploadMetadata)
			cacheFileUpload({ ...metadata, downloadUrl });

		return downloadUrl;
	}
	catch (reason) {
		throw `Error uploading file: ${reason}`;
	}
};

export default uploadFile;
