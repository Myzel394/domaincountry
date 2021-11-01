import { instance } from "@/utils";

interface FetchDisposableInformationResult {
    isMX: boolean;
    isDisposable: boolean;
}

const fetchDisposableInformation = async (domain: string): Promise<FetchDisposableInformationResult> => {
    const url = `https://www.validator.pizza/domain/${domain}`
    const { data } = await instance.get(url);

    return {
        isMX: data.mx,
        isDisposable: data.disposable,
    }
}

export default fetchDisposableInformation;
