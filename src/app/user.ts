export class User {
  constructor(
    public login: string,
    public id: number,
    public email: string,
    public bio: string,
    public company: string,
    public blog: string,
    public location: string,
    public avatar_url: string,
    public repos_url: string,
    public type: string,
    public html_url: string,
    public public_repos: number,
    public followers: number,
    public followers_url: string,
    public following: number,
    public subscriptions: string
  ) {}
}
