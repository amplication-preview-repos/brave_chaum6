import { StudentUpdateManyWithoutTeachersInput } from "./StudentUpdateManyWithoutTeachersInput";
import { WorksheetUpdateManyWithoutTeachersInput } from "./WorksheetUpdateManyWithoutTeachersInput";

export type TeacherUpdateInput = {
  email?: string | null;
  name?: string | null;
  students?: StudentUpdateManyWithoutTeachersInput;
  worksheets?: WorksheetUpdateManyWithoutTeachersInput;
};
