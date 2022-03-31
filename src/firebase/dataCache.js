import { v4 as uuidv4 } from 'uuid';

const fileUploadCache = {};

export const getFileUploadCache = () => fileUploadCache;

export const cacheFileUpload = (metadata) => {
    const uploadId = uuidv4();
    fileUploadCache[uploadId] = metadata;
};
