import React from "react";
import * as Styled from "./App.styled";
import Footer from "./components/Footer/Footer.component";
import Form from "./components/Form/Form.component";
import ImagesBackground from "./components/ImagesBackground/ImagesBackground.component";

function App() {
  return (
    <div>
      <Styled.ContentBlock>
        <ImagesBackground />
        <Form />
      </Styled.ContentBlock>
      <Footer />
    </div>
  );
}

export default App;
