const validateValue = (jsonValue: string) => {
    try {
        JSON.parse(jsonValue);
        return true;
    } catch (error) {
        return false;
    }
};

export const JSONEditorUtils = {
    validateValue,
};
