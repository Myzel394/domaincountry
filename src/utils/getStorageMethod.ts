import StorageArea = browser.storage.StorageArea;

const getStorageMethod = (): StorageArea => {
    const storage = browser.storage && (browser.storage.sync || browser.storage.local);

    if (!storage) {
        throw new Error("Storage not available.");
    }

    return storage;
}

export default getStorageMethod;
