export const StringUtils = {
    isNotBlank(value: string): boolean {
        return !!value && value.trim().length>0;
    }
};