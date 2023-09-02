import { Link } from "react-router-dom";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { clearStore } from "../store/slice/countrySlice";

interface CardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string[];
}

const Card: React.FC<CardProps> = ({
  flag,
  name,
  population,
  region,
  capital,
}) => {
  const dispatch = useDispatch();
  const clearStoreValues = () => {
    dispatch(clearStore(""));
  };
  return (
    <div className="card">
      <Link to={`/${name}`}>
        <img
          onClick={() => clearStoreValues()}
          className="card__img"
          src={flag}
          alt="flag"
        />
      </Link>

      <div className="card__body">
        <h2>{name}</h2>

        <p className="card__body-population">
          <span>Population: </span> {population}
        </p>
        <p className="card__body-region">
          <span>Region: </span> {region}
        </p>
        <p>
          <span>Capital: </span>
          {capital}
        </p>
      </div>
    </div>
  );
};

export default Card;
