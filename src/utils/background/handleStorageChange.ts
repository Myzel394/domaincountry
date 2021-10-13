import { handleActiveTabs } from "@/utils/background";

const handleStorageChange = async (changes: any) => {
    if ("options" in changes) {
        await handleActiveTabs()
    }
}

export default handleStorageChange;
