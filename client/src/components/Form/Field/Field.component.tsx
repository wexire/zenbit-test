import React, { ChangeEvent } from "react";
import * as Styled from "./Field.styled";

interface IField {
  placeholder: string;
  isMessage?: boolean;
  value: string;
  onChange: (e: ChangeEvent<any>) => void;
}

const Field = ({ placeholder, isMessage, value, onChange }: IField) => {
  return (
    <Styled.Field
      placeholder={placeholder}
      required
      rows={isMessage ? 3 : 1}
      value={value}
      onChange={onChange}
    />
  );
};

export default Field;
