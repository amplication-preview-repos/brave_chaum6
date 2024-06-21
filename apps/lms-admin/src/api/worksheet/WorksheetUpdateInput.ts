import { QuestionUpdateManyWithoutWorksheetsInput } from "./QuestionUpdateManyWithoutWorksheetsInput";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type WorksheetUpdateInput = {
  description?: string | null;
  questions?: QuestionUpdateManyWithoutWorksheetsInput;
  teacher?: TeacherWhereUniqueInput | null;
  title?: string | null;
};
