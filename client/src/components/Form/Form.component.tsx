import React, { ChangeEvent, useState } from "react";
import { createFeedback } from "../../service/api";
import { IData } from "../../types";
import Field from "./Field/Field.component";
import * as Styled from "./Form.styled";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [data, setData] = useState<IData>(initialValues);

  return (
    <Styled.Container>
      <Styled.Title>Reach out to us!</Styled.Title>
      <Field
        placeholder="Your name*"
        value={data.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, name: e.currentTarget.value })
        }
      />
      <Field
        placeholder="Your e-mail*"
        value={data.email}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, email: e.currentTarget.value })
        }
      />
      <Field
        placeholder="Your message*"
        isMessage
        value={data.message}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setData({ ...data, message: e.currentTarget.value })
        }
      />
      <Styled.Button
        onClick={() => {
          createFeedback(data);
          setData(initialValues);
        }}
      >
        Send message
      </Styled.Button>
    </Styled.Container>
  );
};

export default Form;
