import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";
import { reject } from "q";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class UserService {
  user: User;

  constructor(private _http: HttpClient) {
    this.user = new User(
      "",
      0,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      0,
      0,
      0,
      ""
    );
  }

  apiKey: string = environment.apiKey;

  public user_api = `https://api.github.com/users/IreriVikki?access_token=${
    this.apiKey
  }`;

  getUserObject(): any {
    interface ApiResponse {
      login: string;
      id: number;
      email: string;
      bio: string;
      company: string;
      blog: string;
      location: string;
      avatar_url: string;
      repos_url: string;
      type: string;
      html_url: string;
      public_repos: number;
      followers: number;
      following: number;
      subscriptions: string;
    }
    let promise = new Promise((resolve, reject) => {
      this._http
        .get<ApiResponse>(this.user_api)
        .toPromise()
        .then(
          response => {
            this.user.login = response.login;
            this.user.id = response.id;
            this.user.email = response.email;
            this.user.bio = response.bio;
            this.user.company = response.company;
            this.user.blog = response.blog;
            this.user.location = response.location;
            this.user.avatar_url = response.avatar_url;
            this.user.repos_url = response.repos_url;
            this.user.type = response.type;
            this.user.html_url = response.html_url;
            this.user.public_repos = response.public_repos;
            this.user.followers = response.followers;
            this.user.following = response.following;
            this.user.subscriptions = response.subscriptions;

            resolve();
          },
          error => {
            reject(error);
          }
        );
    });
    return promise;
  }

  getRepoObject(text): any {
    let repos_api = `https://api.github.com/search/repositories?q=${text}+language:assembly&sort=stars&order=desc?access_token=${
      this.apiKey
    }`;
    return this._http.get(repos_api);
  }

  getExtraApiData(api_url): any {
    return this._http.get(api_url);
  }

  getUserSearchObject(userName): any {
    let api_url = `https://api.github.com/users/${userName}?access_token=${
      this.apiKey
    }`;
    return this._http.get(api_url);
  }
}
