import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JoinOrCreateFamilyComponent } from "./project/join-or-create-family/join-or-create-family.component";
import { RootfamilyComponent } from "./project/rootfamily/rootfamily.component";
import { CreateFamilyComponent } from "./project/create-family/create-family.component";
import { MainPageComponent } from "./project/main-page/main-page.component";
import { RegisterComponent } from "./loginandreg/register/register.component";
import { LoginComponent } from "./loginandreg/login/login.component";
import { CreateAchievementComponent } from "./project/create-achievement/create-achievement.component";

const routes: Routes = [
  { path: "home", component: MainPageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "create", component: CreateAchievementComponent },
  {
    path: "families",
    component: RootfamilyComponent,
    children: [
      { path: "join", component: JoinOrCreateFamilyComponent },
      { path: "new", component: CreateFamilyComponent }
    ]
  },
  {
    path: "chat",
    loadChildren: () =>
      import("../app/project/chat/chat.module").then(mod => mod.ChatModule)
  },
  { path: "", pathMatch: "full", redirectTo: "login" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
