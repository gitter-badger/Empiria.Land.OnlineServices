export class Login {

  public static newLogin(): any {
    let login: {
      email: string,
      password: string
     } = {
        email: "",
         password: ""
     };
    return login;
  }

}
