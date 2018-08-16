import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private _http: HttpClient) {}

  getUserObject(userName): any {
    let api_url = `https://api.github.com/users/${userName}?access_token=fddb95f212a813e2dc0d6085a7bacd7ef55a9eda`;
    return this._http.get(api_url);
  }
}
