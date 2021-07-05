import { reactive } from "vue";
import { getStorage, Options, loadOptions, saveOptions } from "@/utils/options";

interface Data {
    isEnabled: boolean;
    isLoading: boolean;
    isError: boolean;
    data: null | Options;
}

export interface Result {
    storage: Data;
    saveData: (options: Options) => Promise<void>;
}

const storageSetup = (): Result => {
    const storage = getStorage();

    const data = reactive({
        isEnabled: Boolean(storage),
        isLoading: true,
        isError: false,
        data: null,
    } as Data);

    const getData = async () => {
        data.isLoading = true;

        try {
            data.data = await loadOptions();
            data.isError = false;
        } catch {
            data.isError = true;
        } finally {
            data.isLoading = false;
        }
    }

    const saveData = async (options: Options) => {
        data.isLoading = true;

        try {
            await saveOptions(options);
            data.data = options;
            data.isError = false;
        } catch {
            data.isError = false;
        } finally {
            data.isLoading = false;
        }
    }

    // Initial fetch
    getData(); // skipcq: JS-0328

    return {
        storage: data,
        saveData,
    }
}

export default storageSetup;
