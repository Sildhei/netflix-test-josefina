import { MainWrapper } from "./style";
import Lupa from "../../Images/lupa.svg";
import Close from "../../Images/close.svg";

const SearchBar = ({ handleOnChange, handleOnClick, query }) => {
  return (
    <MainWrapper>
      <form onSubmit={(e)=>e.preventDefault()}>
        <img
          src={Lupa}
          alt="magnifying-glass"
          className="magnifyingGlass-img"
        />
        {query === "" ? (
          ""
        ) : (
          <img
            src={Close}
            alt="clear-search"
            className="close-img"
            onClick={handleOnClick}
          />
        )}
        <input
          value={query}
          type="text"
          id="search"
          onChange={(e) => handleOnChange(e)}
          placeholder="Search..."
        />
      </form>
    </MainWrapper>
  );
};

export default SearchBar;
