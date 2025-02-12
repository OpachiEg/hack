export const ColorUtils = {
    getColorByMark(mark: number) {
        switch (mark) {
            case 5:
                return "var(--green)";
            case 4:
                return "var(--blue)";
            case 3:
                return "var(--orange)";
            case 2:
                return "var(--red)";
        }
    }
};