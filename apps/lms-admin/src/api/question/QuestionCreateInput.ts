import { AnswerCreateNestedManyWithoutQuestionsInput } from "./AnswerCreateNestedManyWithoutQuestionsInput";
import { WorksheetWhereUniqueInput } from "../worksheet/WorksheetWhereUniqueInput";

export type QuestionCreateInput = {
  answers?: AnswerCreateNestedManyWithoutQuestionsInput;
  text?: string | null;
  typeField?: "Option1" | null;
  worksheet?: WorksheetWhereUniqueInput | null;
};
