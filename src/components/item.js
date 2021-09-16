import { Link } from "react-router-dom";
import coffee from "../images/anime-anime-gif (1).gif";
import rice from "../images/anime-anime-gif.gif";
import dumpling from "../images/anime-food.gif";
import ramen from "../images/ramen-noodles.gif";

const Item = ({ name }) => {
  const imageObj = {
    coffee: coffee,
    rice: rice,
    dumpling: dumpling,
    ramen: ramen,
  };
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/">
        <button>Go Back</button>
        <img src={imageObj[name]} alt="food" />
      </Link>
    </div>
  );
};

export default Item;
