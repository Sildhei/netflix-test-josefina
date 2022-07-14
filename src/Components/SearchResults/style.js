import styled from "styled-components";
import { customStyles } from "../../utils/customStyles";

const { lightGrey, hoverGrey, red, subtitleGrey } = customStyles;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-row-gap: 80px;
  margin-bottom: 80px;
`;

export const MainWrapper = styled.div`
  margin-top: 120px;
  .related-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    h3 {
      color: ${subtitleGrey};
      font-size: 17px;
      font-weight: 500;
      margin: 0;
      white-space: nowrap;
    }
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      li {
        color: ${lightGrey};
        font-size: 17px;
        border-right: 1px solid ${hoverGrey};
        padding: 0 8px;
        cursor: pointer;
        transition: all ease-in-out 0.2s;
        font-weight: 500;
      }
      li:hover {
        color: ${red};
      }
    }
  }
  & ul li:last-child {
    border: none;
  }

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    .related-wrapper {
      h3,
      ul li {
        font-size: 14px;
      }
    }
  }
`;
