import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 35.2em;
  top: 20%;
  left: 10%;
`;

export const Title = styled.span`
  font-weight: 400;
  font-size: 2.5em;
  line-height: 1.3em;
  color: #3e3e3e;
  margin-bottom: 0.75em;
`;

export const Button = styled.button`
  margin-top: 1.1em;
  font-weight: 400;
  font-size: 1.125em;
  line-height: 1em;
  background: #fad34f;
  border-radius: 500px;
  padding: 1.55em 2.9em;
  color: #ffffff;
  font-family: "Apercu", monospace;
  border: none;
  width: max-content;
  cursor: pointer;
`;
