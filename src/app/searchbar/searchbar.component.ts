import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../user.service";
import { Key } from "protractor";

@Component({
  selector: "app-searchbar",
  templateUrl: "./searchbar.component.html",
  styleUrls: ["./searchbar.component.css"]
})
export class SearchbarComponent implements OnInit {
  constructor(public _User: UserService) {}

  public search: string = "";
  public userSearch: string;
  @Output()
  searchText: EventEmitter<String> = new EventEmitter<String>();

  getUser() {
    this.search = this.userSearch;
    this.searchText.emit(this.search);
  }

  ngOnInit() {}
}
