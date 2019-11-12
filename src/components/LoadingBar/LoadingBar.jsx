import React from "react";
import StyledLoadingBar from "./styles";

const LoadingBar = () => {
  return (
    <StyledLoadingBar>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoadingBar>
  );
};

export default LoadingBar;
