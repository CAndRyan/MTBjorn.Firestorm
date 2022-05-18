import { getDatabase, ref, get, set } from "firebase/database";
import { getActiveFirebaseApp } from './appStore';

const readDataRecordList = async (dbPath) => {
	const { app } = getActiveFirebaseApp();
	const db = getDatabase(app);
    const dbReference = ref(db, dbPath);

	try {
		const snapshot = await get(dbReference);

        if (!snapshot.exists()) {
            console.error(`No data at path '${dbPath}'`);
            return null;
        }
        
        return snapshot.val();
	}
	catch (reason) {
		throw `Error reading data: ${reason}`;
	}
};

const readDataRecord = async (dbPath, recordId) => {
	const { app } = getActiveFirebaseApp();
	const db = getDatabase(app);
    const dbReference = ref(db, `${dbPath}/${recordId}`);

	try {
		const snapshot = await get(dbReference);

        if (!snapshot.exists()) {
            console.error(`No data at path '${dbPath}'`);
            return null;
        }
        
        return snapshot.val();
	}
	catch (reason) {
		throw `Error reading data: ${reason}`;
	}
};

const writeDataRecord = async (record, dbPath) => {
	const { app } = getActiveFirebaseApp();
	const db = getDatabase(app);
    const dbReference = ref(db, `${dbPath}/${record.id}`);

	try {
		await set(dbReference, record);
	}
	catch (reason) {
		throw `Error writing data record: ${reason}`;
	}
};

export {
    readDataRecordList,
	readDataRecord,
    writeDataRecord
};
