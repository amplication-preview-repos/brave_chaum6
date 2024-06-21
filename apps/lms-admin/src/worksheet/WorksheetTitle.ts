import { Worksheet as TWorksheet } from "../api/worksheet/Worksheet";

export const WORKSHEET_TITLE_FIELD = "title";

export const WorksheetTitle = (record: TWorksheet): string => {
  return record.title?.toString() || String(record.id);
};
