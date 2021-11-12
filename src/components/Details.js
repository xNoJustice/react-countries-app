import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${slug}`
        );
        const json = await response.json();
        setCountry(json[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  let languages = [],
    currencies = [];

  if (country.languages) {
    Object.keys(country.languages).map((language) =>
      languages.push(country.languages[language])
    );
  }

  if (country.currencies) {
    Object.keys(country.currencies).map((currency) =>
      currencies.push(country.currencies[currency].name)
    );
  }

  return (
    <section className="min-h-screen min-w-full text-gray-700 dark:text-white body-font">
      <div className="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <>
            <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
              <div className="mb-5">
                <Link
                  to="/"
                  className="font-medium text-gray-700 p-2 dark:text-white title-font md:mb-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 12H6M12 5l-7 7 7 7" />
                  </svg>
                  Back
                </Link>
              </div>

              <img
                className="object-cover object-center rounded"
                src={country.flags.png}
                alt={country.name.common}
              />
            </div>
            <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 className="mb-8 text-2xl font-bold tracking-tighter text-center text-black dark:text-white lg:text-left lg:text-5xl title-font">
                {country.name.common}
              </h1>
              <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">
                      <span className="block">
                        <span className="font-bold">Native Name: </span>
                        {country.name.common}
                      </span>
                      <span className="block">
                        <span className="font-bold">Region: </span>
                        {country.region}
                      </span>
                      <span className="block">
                        <span className="font-bold">Capital: </span>
                        {country.capital}
                      </span>
                      <span className="block">
                        <span className="font-bold">Currencies: </span>
                        {currencies.length > 1
                          ? currencies.join(", ")
                          : currencies[0]}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
                  <div className="flex-grow">
                    <p className="text-base leading-relaxed">
                      <span className="block">
                        <span className="font-bold">Population: </span>
                        {country.population
                          .toLocaleString("en-GB")
                          .replace(/,/g, ".")}
                      </span>
                      <span className="block">
                        <span className="font-bold">Sub Region: </span>
                        {country.subregion}
                      </span>
                      <span className="block">
                        <span className="font-bold">Languages: </span>
                        {languages.length > 1
                          ? languages.join(", ")
                          : languages[0]}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Details;
