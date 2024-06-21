import { SortOrder } from "../../util/SortOrder";

export type AnswerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  questionId?: SortOrder;
  studentId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
