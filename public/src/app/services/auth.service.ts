import { Injectable } from "@angular/core";
import { User } from "../models/user.interface";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isLoggedIn = false;
  user: User;
  constructor() {}
  loginUser(email: string, password: string) {}
}
