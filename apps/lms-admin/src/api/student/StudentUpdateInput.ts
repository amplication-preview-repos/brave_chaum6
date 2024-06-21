import { AnswerUpdateManyWithoutStudentsInput } from "./AnswerUpdateManyWithoutStudentsInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type StudentUpdateInput = {
  answers?: AnswerUpdateManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
