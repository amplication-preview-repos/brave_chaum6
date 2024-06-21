import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { QuestionTitle } from "../question/QuestionTitle";
import { StudentTitle } from "../student/StudentTitle";

export const AnswerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <ReferenceInput source="student.id" reference="Student" label="student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
        <TextInput label="text" multiline source="text" />
      </SimpleForm>
    </Edit>
  );
};
