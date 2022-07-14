import { MainWrapper } from "./style";
import { CardsWrapper } from "./style";
import { useState, useEffect } from "react";
import Card from "../Card/Card";

const SearchResults = ({ searchData, size }) => {
  const [thumbnails, SetThumbnails] = useState();
  const [columns, setColumns] = useState();

  useEffect(() => {
    if (size[0] > 1200) {
      SetThumbnails(19);
      setColumns(6);
    } else if (size[0] <= 1200 && size[0] > 992) {
      SetThumbnails(15);
      setColumns(5);
    } else if (size[0] <= 992 && size[0] > 768) {
      SetThumbnails(12);
      setColumns(4);
    } else if (size[0] <= 768 && size[0] > 576) {
      SetThumbnails(9);
      setColumns(3);
    } else if (size[0] < 576) {
      SetThumbnails(6);
      setColumns(2);
    }
  }, [size]);

  return (
    <MainWrapper>
      <div className="related-wrapper">
        <h3>Explore titles related to: </h3>
        <ul>
          {searchData.slice(0, 4).map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      </div>
      <CardsWrapper columns={columns}>
        {searchData.slice(0, thumbnails).map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </CardsWrapper>
    </MainWrapper>
  );
};

export default SearchResults;
