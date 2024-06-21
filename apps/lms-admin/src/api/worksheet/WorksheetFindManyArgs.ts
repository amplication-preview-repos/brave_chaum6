import { WorksheetWhereInput } from "./WorksheetWhereInput";
import { WorksheetOrderByInput } from "./WorksheetOrderByInput";

export type WorksheetFindManyArgs = {
  where?: WorksheetWhereInput;
  orderBy?: Array<WorksheetOrderByInput>;
  skip?: number;
  take?: number;
};
