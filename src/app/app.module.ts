import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DisplayAreaComponent } from "./display-area/display-area.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ReposComponent } from './repos/repos.component';
import { NumbersDirective } from './numbers.directive';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayAreaComponent,
    SearchbarComponent,
    SidebarComponent,
    ReposComponent,
    NumbersDirective,
    FollowersComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
