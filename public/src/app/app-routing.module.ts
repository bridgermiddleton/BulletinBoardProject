import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JoinOrCreateFamilyComponent } from "./project/join-or-create-family/join-or-create-family.component";
import { RootfamilyComponent } from "./project/rootfamily/rootfamily.component";
import { CreateFamilyComponent } from "./project/create-family/create-family.component";
import { MainPageComponent } from "./project/main-page/main-page.component";
import { RegisterComponent } from "./loginandreg/register/register.component";
import { LoginComponent } from "./loginandreg/login/login.component";
import { CreateAchievementComponent } from "./project/create-achievement/create-achievement.component";
import { EditProfileComponent } from "./project/edit-profile/edit-profile.component";
import { UserProfileDetailsComponent } from "./project/user-profile-details/user-profile-details.component";
import { AchievementDetailsComponent } from "./project/achievement-details/achievement-details.component";
import { EditAchievementComponent } from "./project/edit-achievement/edit-achievement.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: MainPageComponent },
  { path: "editachievement/:id", component: EditAchievementComponent },
  { path: "register", component: RegisterComponent },
  { path: "create", component: CreateAchievementComponent },
  { path: "edit", component: EditProfileComponent },
  { path: "myprofile", component: UserProfileDetailsComponent },
  { path: "achievementdetails/:id", component: AchievementDetailsComponent },
  {
    path: "families",
    component: RootfamilyComponent,
    children: [
      { path: "join", component: JoinOrCreateFamilyComponent },
      { path: "new", component: CreateFamilyComponent }
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
