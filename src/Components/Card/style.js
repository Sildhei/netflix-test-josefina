import styled from "styled-components";
import { customStyles } from "../../utils/customStyles";

const { lightGrey, backGround, iconsGrey } = customStyles;

export const CardWrapper = styled.div`
  overflow: hidden;
  position: relative;
  transition: transform ease-in-out 0.4s;
  height: 140px;
  border-radius: 5px;

  .image-wrapper {
    background: url(${(props) => props.image}) no-repeat center center / cover;
    height: 140px;
    margin: 0 2px;
    position: relative;
    cursor: pointer;
  }
  .text-wrapper {
    position: absolute;
    padding-bottom: 8px;
    opacity: 0;
    width: 100%;
    background-color: ${backGround};
    color: ${lightGrey};
    font-size: 12px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all ease-in-out 0.2s;
    box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
    h3,
    h4 {
      margin: 10px;
    }
    .icons-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 15px;
      cursor: pointer;
      .left-wrapper {
        display: flex;
        align-items: center;
      }
      .icon-wrapper {
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        border: 1px solid ${lightGrey};
        background-color: ${iconsGrey};
        margin-right: 4px;
        transition: all ease-in-out 0.2s;
        img {
          height: 18px;
          padding: 1px;
        }
      }
      .icon-wrapper:first-child {
        margin-left: 10px;
        background-color: ${lightGrey};
      }
      .icon-wrapper.caret {
        margin-right: 10px;
      }
      .icon-wrapper:hover {
        transform: scale(1.1);
      }
    }
  }
  .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: all ease-in-out 0.3s;
    text-align: center;
    padding: 20px 10px;
    h3 {
      margin: 0;
      padding: 0;
      color: ${lightGrey};
      font-size: 20px;
      font-weight: 500;
    }
    h4 {
      margin: 0;
      padding: 5px 0 0 0;
      color: ${lightGrey};
      font-size: 15px;
      font-weight: 400;
    }
  }

  &:hover {
    box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);
    transform: scale(1.2);
    z-index: 1;
    overflow: unset;
    border-radius: 5px;
    .image-wrapper {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .text-wrapper {
      opacity: 1;
    }
  }

  @media screen and (max-width: 992px) {
    &:hover {
      transform: scale(1.1);
    }
  }
`;
