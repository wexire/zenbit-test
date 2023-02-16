import React from "react";
import {
  clouds,
  elipse,
  mapCircle,
  pinkGoodie,
  yellowGoodieSmileBottom,
  yellowGoodieSmileTop,
} from "../../images";
import * as Styled from "./ImagesBackground.styled";

const ImagesBackground = () => {
  return (
    <div>
      <Styled.cloudsBg src={clouds} alt="clouds" />
      <Styled.yellowGoodieSmileTop
        src={yellowGoodieSmileTop}
        alt="yellowGoodieSmileTop"
      />
      <Styled.elipse src={elipse} alt="elipse" />
      <Styled.mapCircle src={mapCircle} alt="mapCircle" />
      <Styled.pinkGoodie src={pinkGoodie} alt="pinkGoodie" />
      <Styled.yellowGoodieSmileBottom
        src={yellowGoodieSmileBottom}
        alt="yellowGoodieSmileBottom"
      />
    </div>
  );
};

export default ImagesBackground;
