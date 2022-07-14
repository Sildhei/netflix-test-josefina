import { MainWrapper } from "./style";
import { LeftWrapper } from "./style";
import { RightWrapper } from "./style";
import Logo from "../../Images/logo.svg";
import LogoMobile from "../../Images/logo-mobile.svg";
import Bell from "../../Images/bell.svg";
import Profile from "../../Images/profile.png";
import Caret from "../../Images/caret.svg";
import SearchBar from "../SearchBar";
import { MobileSections } from "./style";
import { useState } from "react";

const NavBar = ({ handleOnChange, handleOnClick, query, size }) => {
  const [sectionsActive, setSectionsActive] = useState(false);

  const handleSectionsOnClick = () => {
    setSectionsActive((prevCheck) => !prevCheck);
  };

  return (
    <>
      <MainWrapper>
        <div className="nav-wrapper">
          <LeftWrapper>
            <img
              src={size[0] <= 768 ? LogoMobile : Logo}
              alt="Netflix-logo"
            />
            <ul className="desktop-list">
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>New & Popular</li>
              <li>My List</li>
              <li>Watch Again</li>
            </ul>
            <MobileSections>
              <div className="text-wrapper" onClick={handleSectionsOnClick}>
                <p>Sections</p>
                <img src={Caret} alt="drop-down-icon" className="caret-img" />
              </div>
              <ul className={`mobile-list ${sectionsActive ? 'active' : 'innactive'}`}>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Watch Again</li>
              </ul>
            </MobileSections>
          </LeftWrapper>
          <RightWrapper>
            <div className="desktop-searchBar">
              <SearchBar
                handleOnChange={handleOnChange}
                handleOnClick={handleOnClick}
                query={query}
              />
            </div>
            <div className="icons-wrapper">
              <div className="notifications-wrapper">
                <img src={Bell} alt="bell" className="bell-img" />
                <div className="notifications">
                  <p>7</p>
                </div>
              </div>
              <div className="profile-wrapper">
                <img src={Profile} alt="profile-pic" className="profile-img" />
                <img src={Caret} alt="drop-down-icon" className="caret-img" />
              </div>
            </div>
          </RightWrapper>
        </div>
        <div className="mobile-searchBar">
          <SearchBar
            handleOnChange={handleOnChange}
            handleOnClick={handleOnClick}
            query={query}
          />
        </div>
      </MainWrapper>
    </>
  );
};

export default NavBar;
