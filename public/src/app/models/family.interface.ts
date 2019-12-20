import { User } from "./user.interface";
import { Achievement } from "./achievement.interface";

export interface Family {
  name: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  users?: User[];
  achievements?: Achievement[];
}
