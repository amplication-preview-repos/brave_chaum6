import { QuestionCreateNestedManyWithoutWorksheetsInput } from "./QuestionCreateNestedManyWithoutWorksheetsInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type WorksheetCreateInput = {
  description?: string | null;
  questions?: QuestionCreateNestedManyWithoutWorksheetsInput;
  teacher?: TeacherWhereUniqueInput | null;
  title?: string | null;
};
