import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorksheetServiceBase } from "./base/worksheet.service.base";

@Injectable()
export class WorksheetService extends WorksheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
