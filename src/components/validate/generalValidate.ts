export class Validate {

    public static  hasValue(value: string): boolean {
        if ((value === null) || (value === undefined) || (value.length === 0)) {
            return false;
        }
        return true;
    }

}
