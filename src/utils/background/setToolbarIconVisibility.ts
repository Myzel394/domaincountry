import { loadOptions } from "@/utils";

const setToolbarIconVisibility = async () => {
    const {
        allowSearchBarIcon,
    } = await loadOptions();

    if (allowSearchBarIcon) {
        extension.pageAction.show();
    } else {
        extension.pageAction.hide()
    }
}

export default setToolbarIconVisibility;
