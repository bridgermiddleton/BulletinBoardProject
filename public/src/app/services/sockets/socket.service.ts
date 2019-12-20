import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { VirtualTimeScheduler, BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";

export interface Message {
  name: string;
  message: string;
}

export interface User {
  [key: string]: string;
}

@Injectable()
export class SocketService {
  public name: string;
  private $messages: BehaviorSubject<Message[]> = new BehaviorSubject([]);
  private $users: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private socket = io();
  constructor(private router: Router) {
    this.welcome();
    this.getMessage();
    this.newUserConnect();
    this.userDisconnected();
    this.updateMessages();
    this.updatedUsersList();
  }

  get messages(): Observable<Message[]> {
    return this.$messages.asObservable();
  }
  get users(): Observable<string[]> {
    return this.$users.asObservable();
  }

  welcome = (): void => {
    this.socket.on("welcome", () => {
      let name = prompt("Whats your name brotato chip?");
      if (!name) {
        name = prompt("Ya... not going to fly. Still need a name broheim.....");
      }
      if (!name) {
        this.router.navigate(["/login"]);
      }
      this.socket.emit("new_user_name", name);
      this.name = name;
    });
  };

  sendMessage = (msg: Message): void => {
    msg.name = this.name;
    this.socket.emit("new_message", msg);
    this.$messages.next([...this.$messages.value, msg]);
  };

  getMessage = (): void => {
    this.socket.on("new_msg_recieved", (msg: Message) =>
      this.$messages.next([...this.$messages.value, msg])
    );
  };

  updatedUsersList = () => {
    this.socket.on("users", users => {
      console.log(users);
      const usersArray: string[] = Object.values(users);
      console.log(usersArray);
      this.$users.next([...usersArray]);
    });
  };

  newUserConnect = (): void => {
    this.socket.on("new_user", data => {
      console.log(data);
    });
  };

  userDisconnected = (): void => {
    this.socket.on("user_disconnected", data => {
      console.log(data);
    });
  };

  updateMessages = (): void => {
    this.socket.on("update_messages", (messages: Message[]) =>
      this.$messages.next(messages)
    );
  };

  nameFailed = (): void => {
    this.socket.on("no_name", () => {});
  };
}
