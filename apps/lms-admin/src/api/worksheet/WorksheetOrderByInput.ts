import { SortOrder } from "../../util/SortOrder";

export type WorksheetOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  teacherId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
