export class Repos {
  constructor(
    public name: string,
    public privacy: boolean,
    public forks_count: number,
    public default_branch: string,
    public html_url: string,
    public description: string
  ) {}
}
