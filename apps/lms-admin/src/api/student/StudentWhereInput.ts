import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeacherWhereUniqueInput } from "../teacher/TeacherWhereUniqueInput";

export type StudentWhereInput = {
  answers?: AnswerListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  teacher?: TeacherWhereUniqueInput;
};
