import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type AnswerUpdateInput = {
  question?: QuestionWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
  text?: string | null;
};
