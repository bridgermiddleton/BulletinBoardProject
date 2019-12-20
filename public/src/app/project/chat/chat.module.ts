import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatShellComponent } from "./chat-shell/chat-shell.component";
import { UserListComponent } from "./user-list/user-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

const ROUTES: Routes = [{ path: "", component: ChatShellComponent }];

@NgModule({
  declarations: [ChatShellComponent, UserListComponent, MessagesComponent],
  imports: [FormsModule, CommonModule, RouterModule.forChild(ROUTES)]
})
export class ChatModule {}
