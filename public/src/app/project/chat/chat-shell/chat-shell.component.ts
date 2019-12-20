import {
  SocketService,
  Message
} from "/Users/ivar/Documents/Bootcamp/MEAN/BulletinBoardProject/public/src/app/services/sockets/socket.service";
import { Component, OnInit } from "@angular/core";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-chat-shell",
  templateUrl: "./chat-shell.component.html",
  styleUrls: ["./chat-shell.component.scss"],
  providers: [SocketService]
})
export class ChatShellComponent implements OnInit {
  $name: Observable<string>;
  $messages: Observable<Message[]>;
  name: string;
  msg = {
    message: "",
    name: ""
  };
  $users: Observable<string[]>;
  showRawJson = false;
  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.$users = this.socketService.users;
    this.$messages = this.socketService.messages;
    this.msg.name = this.socketService.name;
  }
  sendMessage() {
    if (this.msg.message.length) {
      this.socketService.sendMessage(this.msg);
      this.msg.message = "";
    }
  }
}
