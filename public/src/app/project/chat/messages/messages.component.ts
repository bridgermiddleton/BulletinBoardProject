import { Component, OnInit, Input } from "@angular/core";
import { Message } from "src/app/services/sockets/socket.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  @Input() messages: Message[] = [];
  constructor() {}

  ngOnInit() {
    console.log(this.messages);
  }
}
