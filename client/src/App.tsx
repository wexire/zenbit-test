import React from "react";
import * as Styled from "./App.styled";
import Footer from "./components/Footer/Footer.component";
import Form from "./components/Form/Form.component";
import ImagesBackground from "./components/ImagesBackground/ImagesBackground.component";

function App() {
  return (
    <Styled.Container>
      <Styled.ContentBlock>
        <ImagesBackground />
        <Form />
      </Styled.ContentBlock>
      <Styled.FooterBlock>
        <Footer />
      </Styled.FooterBlock>
    </Styled.Container>
  );
}

export default App;
