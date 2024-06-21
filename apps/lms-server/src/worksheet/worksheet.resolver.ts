import * as graphql from "@nestjs/graphql";
import { WorksheetResolverBase } from "./base/worksheet.resolver.base";
import { Worksheet } from "./base/Worksheet";
import { WorksheetService } from "./worksheet.service";

@graphql.Resolver(() => Worksheet)
export class WorksheetResolver extends WorksheetResolverBase {
  constructor(protected readonly service: WorksheetService) {
    super(service);
  }
}
