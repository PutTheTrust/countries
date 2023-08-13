import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";
import "./Country.scss";

const Country = () => {
  const [isLoading, setLoading] = useState(false);
  const [country, setCountry] = useState<any>([]);
  const [native, setNative] = useState();
  const [currency, setCurrency] = useState();
  const [language, setLanguage] = useState();
  const [borders, setBorder] = useState([]);

  const navigate = useNavigate();
  let { countryId } = useParams();
  let url = `https://restcountries.com/v3.1/name/${countryId}`;

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data[0]);
        const nativeLang = Object.keys(data[0].name.nativeName);
        nativeLang.forEach((nat) => {
          setNative(data[0].name.nativeName[nat].common);
          // console.log(data[0].name.nativeName[nat].common);
        });

        const currencies = Object.keys(data[0].currencies);
        currencies.forEach((currency) => {
          setCurrency(data[0].currencies[currency].name);
          // console.log(data[0].currencies[currency].name);
          // console.log(currency);
        });

        const languages = Object.keys(data[0].languages);
        // console.log(languages);
        languages.forEach((lang) => {
          setLanguage(data[0].languages[lang]);
          // console.log(data[0].currencies[currency].name);
          // console.log(currency);
        });

        setBorder(data[0].borders);
      });

    setLoading(false);
  }, []);

  return (
    <div className="country">
      <button className="country__button" onClick={() => navigate(-1)}>
        <ArrowLeft />
        Back
      </button>
      <div className="country__info">
        {!isLoading && (
          <>
            <img
              className="country__info-img"
              src={country?.flags?.svg}
              alt="flag"
            />

            <div className="country__info-right">
              <h2 className="country__info-title">{country?.name?.common}</h2>
              <div className="country__info__container">
                <div className="country__info__container-first">
                  <p className="xd">
                    <span>Native Name:</span> {native}
                  </p>
                  <p className="xd">
                    <span>Population:</span> {country?.population}
                  </p>
                  <p className="xd">
                    <span>Region:</span> {country?.region}
                  </p>
                  <p className="xd">
                    <span>Sub Region:</span> {country?.subregion}
                  </p>
                  <p className="xd">
                    <span>Capital:</span> {country?.capital}
                  </p>
                </div>

                <div className="country__info__container-second">
                  <p className="xd">
                    <span>Top Level Domain:</span> {country?.tld}
                  </p>

                  <p className="xd">
                    <span>Currencies:</span> {currency}
                  </p>

                  <p className="xd">
                    <span>Languages:</span> {language}
                  </p>
                </div>
              </div>
              <div className="bo">
                <h3>Border Countries:</h3>
                <div className="country__info-border">
                  {borders &&
                    borders.map((b: any) => (
                      <p className="country__info-border-card">{b}</p>
                    ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Country;
