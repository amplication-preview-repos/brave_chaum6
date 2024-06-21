import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AnswerCreateInput = {
  question?: QuestionWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  text?: string | null;
};
