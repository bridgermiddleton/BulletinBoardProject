import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "src/app/models/user.interface";
import { Family } from "src/app/models/family.interface";
import { Achievement } from "../models/achievement.interface";
import { Login } from "../models/login.interface";

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private http: HttpClient) {}
  getAllFamilies() {
    return this.http.get<Family[]>("/api/families");
  }
  getOneFamily(id: string) {
    return this.http.get<Family>(`/api/families/${id}`);
  }
  createFamily(family: Family) {
    return this.http.post<Family>("/api/families/new", family);
  }
  updateFamily(family: Family) {
    return this.http.put<Family>(`/api/families/update/${family._id}`, family);
  }
  deleteFamily(id: string) {
    return this.http.delete<Family>(`/api/families/delete/${id}`);
  }
  getAllAchievements() {
    return this.http.get<Achievement[]>("/api/achievements");
  }
  getOneAchievement(id: string) {
    return this.http.get<Achievement>(`/api/achievements/${id}`);
  }
  createAchievement(id: string, achievement: Achievement) {
    return this.http.post<Achievement>(
      `/api/achievements/new/${id}`,
      achievement
    );
  }
  deleteAchievement(id: string) {
    return this.http.delete<Achievement>(`/api/achievements/delete/${id}`);
  }
  getAllUsers() {
    return this.http.get<User[]>("/api/users");
  }
  getOneUser(id: string) {
    return this.http.get<User>(`/api/users/${id}`);
  }
  updateUser(user: User) {
    return this.http.put<User>(`/api/users/update/${user._id}`, user);
  }
  deleteUser(id: string) {
    return this.http.delete<User>(`/api/users/delete/${id}`);
  }
}
