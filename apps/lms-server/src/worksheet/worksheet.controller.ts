import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorksheetService } from "./worksheet.service";
import { WorksheetControllerBase } from "./base/worksheet.controller.base";

@swagger.ApiTags("worksheets")
@common.Controller("worksheets")
export class WorksheetController extends WorksheetControllerBase {
  constructor(protected readonly service: WorksheetService) {
    super(service);
  }
}
