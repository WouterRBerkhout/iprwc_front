export class UserModel {
  constructor(
    public id: string,
    public username: string,
    public enabled: boolean,
    public role: string
  ) {}
}