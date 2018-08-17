import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  apiKey: string = environment.apiKey;

  public user_api = `https://api.github.com/users/IreriVikki?api-key=${
    this.apiKey
  }`;

  getUserObject(): any {
    return this._http.get(this.user_api);
  }

  getExtraApiData(api_url): any {
    return this._http.get(api_url);
  }

  getUserSearchObject(userName): any {
    let api_url = `https://api.github.com/users/${userName}?access_token=f${
      this.apiKey
    }`;
    return this._http.get(api_url);
  }
}
