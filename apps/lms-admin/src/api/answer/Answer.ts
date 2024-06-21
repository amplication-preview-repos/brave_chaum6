import { Question } from "../question/Question";
import { Student } from "../student/Student";

export type Answer = {
  createdAt: Date;
  id: string;
  question?: Question | null;
  student?: Student | null;
  text: string | null;
  updatedAt: Date;
};
