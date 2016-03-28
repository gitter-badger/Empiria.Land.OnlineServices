export class Validate {

  public static notNull(value: string): boolean {
    if ((value === null) || (value === undefined) || (value.length === 0)) {
      return false;
    }
    return true;
  }

  public static isEmail(value: string): boolean {
    if (!this.notNull(value)) {
        return false;
    }
    let emailExp: string = '^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$';
    let regularExpresion = new RegExp(emailExp);
    let test = regularExpresion.test(value);
    return test;
  }

  public static isTrue(value: boolean): boolean {

   return value === true;
  }

}
