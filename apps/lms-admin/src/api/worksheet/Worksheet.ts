import { Question } from "../question/Question";
import { Teacher } from "../teacher/Teacher";

export type Worksheet = {
  createdAt: Date;
  description: string | null;
  id: string;
  questions?: Array<Question>;
  teacher?: Teacher | null;
  title: string | null;
  updatedAt: Date;
};
