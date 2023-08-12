import { DropDown, Search } from "../components";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__input">
        <Search />
        <DropDown />
      </div>
    </div>
  );
};

export default Home;
