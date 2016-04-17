export class Parse {
  public dateParts: any;
  public spanishMonth: string;

  public static hasValue(value: string): boolean {
    if ((value === null) || (value === undefined) || (value.length === 0)) {
      return false;
    }
    return true;
  }

  public static notNull(value: string): boolean {
    if ((value === null) || (value === undefined)) {
      return false;
    }
    return true;
  }

  public static parseDate(value: any): string {
    console.log("fecha en parse: ", value);

    let dateParts = String(value).split("-");
    console.log("array: ", dateParts);

    let spanishMonth = "";
    switch (dateParts[1].toLowerCase()) {
      case "01":
        spanishMonth = "ene";
        break;
      case "02":
        spanishMonth = "feb";
        break;
      case "03":
        spanishMonth = "mar";
        break;
      case "04":
        spanishMonth = "abr";
        break;
      case "05":
        spanishMonth = "may";
        break;
      case "06":
        spanishMonth = "jun";
        break;
      case "07":
        spanishMonth = "jul";
        break;
      case "08":
        spanishMonth = "ago";
        break;
      case "09":
        spanishMonth = "sep";
        break;
      case "10":
        spanishMonth = "oct";
        break;
      case "11":
        spanishMonth = "nov";
        break;
      case "12":
        spanishMonth = "dic";
        break;
    }

    let documentDateTxt = dateParts[2] + '/' + spanishMonth + '/' + dateParts[0];
    return documentDateTxt;
  }

  public static isTrue(value: boolean): boolean {
    return value === true;
  }

}
