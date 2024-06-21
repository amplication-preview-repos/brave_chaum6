import { AnswerListRelationFilter } from "../answer/AnswerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { WorksheetWhereUniqueInput } from "../worksheet/WorksheetWhereUniqueInput";

export type QuestionWhereInput = {
  answers?: AnswerListRelationFilter;
  id?: StringFilter;
  text?: StringNullableFilter;
  typeField?: "Option1";
  worksheet?: WorksheetWhereUniqueInput;
};
