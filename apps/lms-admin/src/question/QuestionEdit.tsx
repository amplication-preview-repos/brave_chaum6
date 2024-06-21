import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { AnswerTitle } from "../answer/AnswerTitle";
import { WorksheetTitle } from "../worksheet/WorksheetTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="answers"
          reference="Answer"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnswerTitle} />
        </ReferenceArrayInput>
        <TextInput label="text" multiline source="text" />
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="worksheet.id"
          reference="Worksheet"
          label="worksheet"
        >
          <SelectInput optionText={WorksheetTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
