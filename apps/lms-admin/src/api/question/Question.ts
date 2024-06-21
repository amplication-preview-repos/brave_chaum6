import { Answer } from "../answer/Answer";
import { Worksheet } from "../worksheet/Worksheet";

export type Question = {
  answers?: Array<Answer>;
  createdAt: Date;
  id: string;
  text: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  worksheet?: Worksheet | null;
};
