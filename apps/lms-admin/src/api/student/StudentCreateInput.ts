import { AnswerCreateNestedManyWithoutStudentsInput } from "./AnswerCreateNestedManyWithoutStudentsInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type StudentCreateInput = {
  answers?: AnswerCreateNestedManyWithoutStudentsInput;
  email?: string | null;
  name?: string | null;
  teacher?: TeacherWhereUniqueInput | null;
};
