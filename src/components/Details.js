import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { slug } = useParams();
  const [country, setCountry] = useState([]);
  const [borders, setBorders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const url = "https://restcountries.eu/rest/v2";

    const fetchData = async () => {
      try {
        const response = await fetch(
          `${url}/name/${slug}?fields=name;nativeName;population;region;subregion;capital;topLevelDomain;currencies;languages;borders;flag`
        );
        const json = await response.json();

        if (json[0].borders.length) {
          const response2 = await fetch(
            `${url}/alpha?fields=name&codes=${json[0].borders.join(";")}`
          );
          const json2 = await response2.json();
          setBorders(json2);
        }
        setCountry(json[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  const languages = country.languages?.map((language) => language.name);
  const currencies = country.currencies?.map((currency) => currency.name);

  return (
    <section class="min-h-screen min-w-full text-gray-700 dark:text-white body-font">
      <div class="container flex flex-col items-center px-5 py-16 mx-auto lg:px-20 lg:py-24 md:flex-row">
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          <>
            <div class="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
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
                class="object-cover object-center rounded"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div class="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
              <h1 class="mb-8 text-2xl font-bold tracking-tighter text-center text-black dark:text-white lg:text-left lg:text-5xl title-font">
                {country.name}
              </h1>
              <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4 ">
                <div class="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
                  <div class="flex-grow">
                    <p class="text-base leading-relaxed">
                      <span className="block">
                        <span className="font-bold">Native Name: </span>
                        {country.nativeName}
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
                        {typeof currencies === "object"
                          ? currencies.join(", ")
                          : currencies}
                      </span>
                    </p>
                  </div>
                </div>
                <div class="flex flex-col items-center p-4 mb-6 text-center md:w-1/2 md:mb-0 lg:text-left lg:items-start">
                  <div class="flex-grow">
                    <p class="text-base leading-relaxed">
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
                        <span className="font-bold">Top Level Domain: </span>
                        {country.topLevelDomain}
                      </span>
                      <span className="block">
                        <span className="font-bold">Languages: </span>
                        {typeof languages === "object"
                          ? languages.join(", ")
                          : languages}
                      </span>
                    </p>
                  </div>
                </div>
                <span className="block mt-3">
                  <span className="font-bold text-lg">Border Countries: </span>
                  {borders.map((border, i) => (
                    <Link
                      className="mr-1 bg-gray-700 dark:bg-gray-700 text-base p-1 rounded-lg hover:bg-gray-500"
                      key={i}
                      to={"/" + border.name}
                    >
                      {border.name}
                    </Link>
                  ))}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Details;
