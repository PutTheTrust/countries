import { ArrowLeft } from "lucide-react";

import "./Country.scss";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Country = () => {
  const [isLoading, setLoading] = useState(false);
  const [ctry, setCountry] = useState([]);
  const navigate = useNavigate();
  let { country } = useParams();
  useEffect(() => {
    setLoading(true);
    const getCountry = async () => {
      const data = await axios.get(
        `https://restcountries.com/v3.1/name/${country}`
      );
      // console.log(data.data[0]);
      setCountry(data.data[0]);
    };

    getCountry();

    setLoading(false);
  }, []);
  if (!isLoading) {
    console.log(ctry);
  }

  return (
    <div className="country">
      <button className="country__button" onClick={() => navigate(-1)}>
        <ArrowLeft />
        Back
      </button>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img className="country__img" src={ctry.flags.svg} alt="" />

          <h2>{ctry.name.common}</h2>

          <div>
            <p>
              <span>Native Name: </span> --
            </p>
            <p>
              <span>Population: </span>
              {ctry.population}
            </p>
            <p>
              <span>Region: </span> {ctry.region}
            </p>
            <p>
              <span>Sub region: </span>
              {ctry.subregion}
            </p>
            <p>
              <span>Capital: </span> {ctry.capital}
            </p>
          </div>

          <div>
            <p>
              <span>Top Level Domain: </span>
              {ctry?.tld[0]}
            </p>
            <p>
              <span>Currencies: </span> --
            </p>
            <p>
              <span>Languages: </span> --
            </p>
          </div>

          <h3>Border Countries</h3>
        </div>
      )}
    </div>
  );
};

export default Country;
