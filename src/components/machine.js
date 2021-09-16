import { Link } from "react-router-dom";

const Machine = () => {
  return (
    <div>
      <h1>My Vending Machine</h1>
      <Link to="/coffee">Coffee</Link>
      <Link to="/rice">Rice</Link>
      <Link to="/dumpling">Dumpling</Link>
      <Link to="/ramen">Ramen</Link>
    </div>
  );
};

export default Machine;
