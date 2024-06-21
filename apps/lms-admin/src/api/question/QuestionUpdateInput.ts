import { AnswerUpdateManyWithoutQuestionsInput } from "./AnswerUpdateManyWithoutQuestionsInput";
import { WorksheetWhereUniqueInput } from "../worksheet/WorksheetWhereUniqueInput";

export type QuestionUpdateInput = {
  answers?: AnswerUpdateManyWithoutQuestionsInput;
  text?: string | null;
  typeField?: "Option1" | null;
  worksheet?: WorksheetWhereUniqueInput | null;
};
