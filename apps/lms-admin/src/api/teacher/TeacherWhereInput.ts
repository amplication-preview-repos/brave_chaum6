import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";
import { WorksheetListRelationFilter } from "../worksheet/WorksheetListRelationFilter";

export type TeacherWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  students?: StudentListRelationFilter;
  worksheets?: WorksheetListRelationFilter;
};
