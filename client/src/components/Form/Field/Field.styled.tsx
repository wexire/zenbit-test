import styled from "styled-components";

export const Field = styled.textarea`
  padding: 1.4em 2.15em;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 0.45em;
  width: 100%;
  color: #2d2d2d;
  font-size: 1.15em;
  font-weight: 400;
  font-family: "Apercu", monospace;
  line-height: 1.75em;
  resize: none;

  &::placeholder {
    color: #2d2d2d;
  }
`;
