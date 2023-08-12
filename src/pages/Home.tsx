import { useEffect, useState } from "react";
import { Card, DropDown, Search } from "../components";

import "./Home.scss";
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchCountries = async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all");

      setCountries(data.data);
    };
    fetchCountries();
    setLoading(false);
  }, []);
  return (
    <div className="home">
      <div className="home__input">
        <Search />
        <DropDown />
      </div>

      <div className="home__countries">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          countries.map((country: any) => (
            <Card
              key={country.name.common}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
            // <p>{country.name.common}</p>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
