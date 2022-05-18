import { registerFirebaseApp, setActiveFirebaseApp, getActiveFirebaseApp } from './firebase/appStore';
import uploadFile from './firebase/uploadFile';
import { getFileUploadCache } from './firebase/dataCache';
import { readDataRecordList, readDataRecord, writeDataRecord } from './firebase/dbContext';

const setupActiveFirebaseApp = ({ appName, appConfig, driverConfig }) => {
    registerFirebaseApp(appName, appConfig, driverConfig);
    setActiveFirebaseApp(appName);
};

export {
    setupActiveFirebaseApp,
    getActiveFirebaseApp,
    uploadFile,
    getFileUploadCache,
    readDataRecordList,
    readDataRecord,
    writeDataRecord
};