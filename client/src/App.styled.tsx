import styled from "styled-components";

export const ContentBlock = styled.div`
  height: 58em;
  @media (max-width: 1000px) {
    height: 45em;
  }
`;

export const FooterBlock = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  @media (max-width: 1000px) {
    width: 100vw;
    overflow: hidden;
  }
`;
