import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getActiveFirebaseApp } from './appStore';

const readStorageFolder = async (folder) => {
	const { app } = getActiveFirebaseApp();
	const storage = getStorage(app);
    const storageReference = ref(storage, folder);

	try {
        const { items } = await listAll(storageReference); // TODO: handle nested folders via 'prefixes'

		const getUrlFuncs = items.map((itemRef) => async () => await getDownloadURL(itemRef));
        const getUrlTasks = getUrlFuncs.map((func) => func());
        const urlListObj = await Promise.all(getUrlTasks);

        return urlListObj;
	}
	catch (reason) {
		throw `Error reading data: ${reason}`;
	}
};

export {
    readStorageFolder
};
