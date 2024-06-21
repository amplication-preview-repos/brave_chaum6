import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { WORKSHEET_TITLE_FIELD } from "./WorksheetTitle";
import { TEACHER_TITLE_FIELD } from "../teacher/TeacherTitle";

export const WorksheetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField label="teacher" source="teacher.id" reference="Teacher">
          <TextField source={TEACHER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Question"
          target="worksheetId"
          label="Questions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="text" source="text" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="worksheet"
              source="worksheet.id"
              reference="Worksheet"
            >
              <TextField source={WORKSHEET_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
