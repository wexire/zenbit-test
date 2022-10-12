import React from "react";
import * as Styled from "./App.styled";
import Form from "./components/Form/Form.component";
import ImagesBackground from "./components/ImagesBackground/ImagesBackground.component";

function App() {
  return (
    <Styled.Container>
      <Form />
      <ImagesBackground />
    </Styled.Container>
  );
}

export default App;
