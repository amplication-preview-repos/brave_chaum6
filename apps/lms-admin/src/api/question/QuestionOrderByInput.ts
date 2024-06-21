import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  text?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  worksheetId?: SortOrder;
};
