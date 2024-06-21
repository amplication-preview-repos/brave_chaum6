import { StudentCreateNestedManyWithoutTeachersInput } from "./StudentCreateNestedManyWithoutTeachersInput";
import { WorksheetCreateNestedManyWithoutTeachersInput } from "./WorksheetCreateNestedManyWithoutTeachersInput";

export type TeacherCreateInput = {
  email?: string | null;
  name?: string | null;
  students?: StudentCreateNestedManyWithoutTeachersInput;
  worksheets?: WorksheetCreateNestedManyWithoutTeachersInput;
};
