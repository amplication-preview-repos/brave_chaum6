import { Module } from "@nestjs/common";
import { WorksheetModuleBase } from "./base/worksheet.module.base";
import { WorksheetService } from "./worksheet.service";
import { WorksheetController } from "./worksheet.controller";
import { WorksheetResolver } from "./worksheet.resolver";

@Module({
  imports: [WorksheetModuleBase],
  controllers: [WorksheetController],
  providers: [WorksheetService, WorksheetResolver],
  exports: [WorksheetService],
})
export class WorksheetModule {}
