import "./Card.scss";

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
  return (
    <div className="card">
      <img className="card__img" src={flag} alt="flag" />

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
