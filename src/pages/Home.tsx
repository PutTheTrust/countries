import { useEffect, useState } from "react";
import { Card, DropDown, Search } from "../components";

import "./Home.scss";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setLoading] = useState<boolean>();
  const name = useSelector((state: any) => state.countryStore.country);
  const region = useSelector((state: any) => state.countryStore.region);
  useEffect(() => {
    setLoading(true);
    const fetchCountries = async () => {
      const data = await axios.get("https://restcountries.com/v3.1/all");

      setCountries(data.data);
      setLoading(false);
    };
    fetchCountries();
  }, []);

  const filteredData = countries.filter((item: any) =>
    item.name.common.toLowerCase().includes(name.toLowerCase())
  );

  const regionData = filteredData.filter((item: any) =>
    item.region.toLowerCase().includes(region.toLowerCase())
  );
  return (
    <div className="home">
      <div className="home__input">
        <Search />
        <DropDown />
      </div>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="home__countries">
          {regionData.map((country: any) => (
            <Card
              key={country.name.common}
              flag={country.flags.svg}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
