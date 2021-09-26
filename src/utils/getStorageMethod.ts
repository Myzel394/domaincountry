import StorageArea = browser.storage.StorageArea;

const getStorageMethod = (): StorageArea => {
    const storage = extension.storage && (extension.storage.sync || extension.storage.local);

    if (!storage) {
        throw new Error("Storage not available.");
    }

    return storage;
}

export default getStorageMethod;
