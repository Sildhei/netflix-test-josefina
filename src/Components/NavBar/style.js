import styled from "styled-components";
import { customStyles } from "../../utils/customStyles";

const { strongGrey, lightGrey, hoverGrey, red } = customStyles;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 25px;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding-left: 30px;

    li {
      color: ${lightGrey};
      font-size: 14px;
      padding-left: 20px;
      font-weight: 400;
      cursor: pointer;
      transition: all ease-in-out 0.2s;
    }
    li:hover {
      color: ${hoverGrey};
    }
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icons-wrapper {
    display: flex;
    align-items: center;

    .notifications-wrapper {
      position: relative;
      top: 2px;
      padding-left: 20px;
      &:hover {
        cursor: pointer;
      }
      position: relative;
      .bell-img {
        height: 23px;
      }
      .notifications {
        height: 16px;
        width: 16px;
        background-color: ${red};
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
        p {
          color: ${lightGrey};
          font-size: 9px;
          text-align: center;
          margin: 2px 0 0 0;
          font-weight: 600;
        }
      }
      .notifications:hover {
        transform: scale(1.1);
      }
    }
    .profile-wrapper {
      padding-left: 20px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .profile-img {
        height: 32px;
        border-radius: 5px;
      }

      .caret-img {
        height: 15px;
        margin-left: 5px;
        transition: all ease-in-out 0.3s;
      }

      .caret-img:hover {
        transform: rotate(180deg);
      }
    }
  }
`;

export const MobileSections = styled.div`
  position: relative;
  display: none;
  .text-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      margin: 0;
      font-size: 16px;
    }
    .caret-img {
      height: 15px;
      padding-left: 5px;
      transition: all ease-in-out 0.3s;
    }
  }

  ul.mobile-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    position: absolute;
    top: 30px;
    background-color: ${lightGrey};
    width: 100%;
    z-index: 1;
    transition: all ease-in-out 0.4s;

    li {
      padding: 5px;
      color: ${strongGrey};
    }
  }

  ul.mobile-list.innactive {
    height: 0;
    overflow: hidden;
  }
  ul.mobile-list.active {
    height: 194px;
    overflow: unset;
  }
`;

export const MainWrapper = styled.div`
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
  }

  .mobile-searchBar {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    ${LeftWrapper} {
      ul {
        padding-left: 0;
        li {
        padding-left: 12px;
      }
    }
  }
}

  @media screen and (max-width: 992px) {
    ${LeftWrapper} {
      ul.desktop-list {
        display: none;
      }
    }
    ${MobileSections} {
      display: flex;
      flex-direction: column;
      color: ${lightGrey};
      padding-left: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav-wrapper {
      width: 100%;
      .desktop-searchBar {
        display: none;
      }
    }

    .mobile-searchBar {
      display: block;
      margin-top: 20px;
    }
  }
`;
