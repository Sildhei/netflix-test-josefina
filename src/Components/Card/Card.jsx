import { CardWrapper } from "./style";
import Like from "../../Images/like.svg";
import Plus from "../../Images/plus.svg";
import Play from "../../Images/play.svg";
import Caret from "../../Images/caret.svg";

const Card = ({ movie }) => {
  return (
    <CardWrapper image={movie.image}>
      <div className="image-wrapper">
      </div>
      <div className="text-wrapper">
        <div className="igtcons-wrapper">
          <div className="left-wrapper">
            <div className="icon-wrapper">
              <img src={Play} alt="play" />
            </div>
            <div className="icon-wrapper">
              <img src={Plus} alt="plus" />
            </div>
            <div className="icon-wrapper">
              <img src={Like} alt="like" />
            </div>
          </div>
          <div className="icon-wrapper caret">
          <img src={Caret}  alt="drop-down" />
          </div>
        </div>
        <h3>{movie.title}</h3>
        <h4>{movie.description}</h4>
      </div>
    </CardWrapper>
  );
};

export default Card;
