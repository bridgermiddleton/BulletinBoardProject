import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ProjectService } from "./services/project.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { JoinOrCreateFamilyComponent } from "./project/join-or-create-family/join-or-create-family.component";
import { MainFamilyBoardComponent } from "./project/main-family-board/main-family-board.component";
import { RootfamilyComponent } from "./project/rootfamily/rootfamily.component";
import { CreateFamilyComponent } from "./project/create-family/create-family.component";
import { MainPageComponent } from "./project/main-page/main-page.component";
import { RegisterComponent } from "./loginandreg/register/register.component";
import { LoginComponent } from "./loginandreg/login/login.component";
import { CreateAchievementComponent } from "./project/create-achievement/create-achievement.component";
import { AuthService } from "./services/auth.service";
import { EditProfileComponent } from "./project/edit-profile/edit-profile.component";
import { UserProfileDetailsComponent } from "./project/user-profile-details/user-profile-details.component";
import { AchievementDetailsComponent } from "./project/achievement-details/achievement-details.component";
import { SocketService } from "./services/sockets/socket.service";
import { EditAchievementComponent } from './project/edit-achievement/edit-achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinOrCreateFamilyComponent,
    MainFamilyBoardComponent,
    RootfamilyComponent,
    CreateFamilyComponent,
    MainPageComponent,
    RegisterComponent,
    LoginComponent,
    CreateAchievementComponent,
    EditProfileComponent,
    UserProfileDetailsComponent,
    AchievementDetailsComponent,
    EditAchievementComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ProjectService, AuthService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
