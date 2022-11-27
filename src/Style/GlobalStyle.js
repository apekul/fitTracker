import { createGlobalStyle } from "styled-components";
import { COLORS } from "./Constant";

export default createGlobalStyle`
    *{
      /* Hide arrows from input number  */
      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }

    font-family: 'Roboto', sans-serif;
    list-style: none;
  
    body{
      margin: 0;
      padding: 0;
      background: ${COLORS.bgColor};    
    }

    
}

`