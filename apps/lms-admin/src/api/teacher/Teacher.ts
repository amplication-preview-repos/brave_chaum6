import { Student } from "../student/Student";
import { Worksheet } from "../worksheet/Worksheet";

export type Teacher = {
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  students?: Array<Student>;
  updatedAt: Date;
  worksheets?: Array<Worksheet>;
};
