import { reactive } from "vue";
import { getStorageMethod, options } from "@/utils";
import { Options } from "@/utils";

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
    const storage = getStorageMethod();

    const data = reactive({
        isEnabled: Boolean(storage),
        isLoading: true,
        isError: false,
        data: null,
    } as Data);

    const getData = async () => {
        data.isLoading = true;

        try {
            data.data = await options.loadOptions();
            data.isError = false;
        } catch {
            data.isError = true;
        } finally {
            data.isLoading = false;
        }
    }

    const saveData = async (newOptions: Options) => {
        data.isLoading = true;

        try {
            await options.saveOptions(newOptions);
            data.data = newOptions;
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
