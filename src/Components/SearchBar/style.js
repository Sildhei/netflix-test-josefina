import styled from "styled-components";
import { customStyles } from "../../utils/customStyles";

const { lightGrey, strongGrey } = customStyles;

export const MainWrapper = styled.div`
  form {
    position: relative;
    display: flex;
    align-items: center;
    width: 250px;

    img {
      height: 18px;
      position: absolute;
    }

    .magnifyingGlass-img {
      left: 5px;
    }
    .close-img {
      right: 5px;
      cursor: pointer;
      transition: all ease-in-out 0.4s;
    }

    .close-img:hover {
      transform: rotate(180deg);
    }

    input {
      height: 30px;
      width: 100%;
      background-color: ${strongGrey};
      border: 1px solid ${lightGrey};
      padding: 0 30px;
      color: ${lightGrey};
      font-size: 16px;
    }
    input[data-autocompleted] {
      background-color: transparent !important;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    input:focus-visible {
      outline: 0;
    }
  }
`;
