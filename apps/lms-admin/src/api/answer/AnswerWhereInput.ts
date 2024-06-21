import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnswerWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  student?: StudentWhereUniqueInput;
  text?: StringNullableFilter;
};
