import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { UserService } from "../user.service";

@Component({
  selector: "app-followers",
  templateUrl: "./followers.component.html",
  styleUrls: ["./followers.component.css"]
})
export class FollowersComponent implements OnInit, OnChanges {
  constructor(private _user: UserService) {}

  @Input()
  followersUrl;
  public followers;

  ngOnChanges() {
    this._user.getExtraApiData(this.followersUrl).subscribe(data => {
      this.followers = data;
    });
  }

  ngOnInit() {}
}
