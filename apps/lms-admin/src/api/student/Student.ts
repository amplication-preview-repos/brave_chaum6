import { Answer } from "../answer/Answer";
import { Teacher } from "../teacher/Teacher";

export type Student = {
  answers?: Array<Answer>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  teacher?: Teacher | null;
  updatedAt: Date;
};
