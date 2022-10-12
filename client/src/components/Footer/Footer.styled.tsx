import styled from "styled-components";

export const Container = styled.div`
  height: 12.5em;
  width: 100%;
  overflow: hidden;
  border: 1px solid #d8d8d8;
`;

export const pinkGoodie = styled.img`
  position: relative;
  top: -20%;
  left: 1%;
`;

export const blueGoodie = styled.img`
  position: relative;
  left: 65%;
  top: -103%;
`;

export const yellowGoodieSmileTop = styled.img`
  position: relative;
  left: 68%;
  top: -60%;
`;

export const LinksContainer = styled.div`
  width: max-content;
  position: relative;
  left: 23%;
  top: -115%;
  display: flex;
  flex-direction: row;
  gap: 1.6em;

  img {
    cursor: pointer;
  }
`;
