export interface Achievement {
  category: string;
  title: string;
  description: string;
  unit_of_time: number | string;
  length_of_time: number | string;
  image_url?: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
