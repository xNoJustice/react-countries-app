import logo from "./logo.svg";
import "./logo.css";
import { Link } from "react-router-dom";
import Country from "./Country";
import Search from "./Search";
import Filter from "./Filter";
import { useEffect, useState } from "react";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
        );
        const json = await response.json();
        setCountries(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setCountries]);

  useEffect(() => {
    const newCountries = countries.filter((country) =>
      country.region.includes(filter === "All" ? "" : filter)
    );
    setFilteredData(newCountries);
  }, [countries, filter, setFilteredData]);

  useEffect(() => {
    const newCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(newCountries);
  }, [countries, search, setFilteredData]);

  return (
    <section className="w-full h-auto min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="mb-4 mt-3 font-medium text-gray-900 title-font md:mb-0"
          >
            <h2 className="text-lg font-bold text-center text-black dark:text-gray-100 uppercase transition duration-500 ease-in-out transform hover:text-gray-400">
              <img src={logo} alt="logo" className="logo" />
            </h2>
          </Link>
        </div>
        <h1 className="text-center mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          React Countries App
        </h1>
        <div className="flex flex-wrap justify-between mx-20">
          <Search search={search} setSearch={setSearch} />
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="text-gray-700 dark:text-white">
          <div className="flex flex-wrap -m-1 md:-m-2 justify-center">
            {filteredData.map((country, i) => (
              <Link
                className="flex flex-wrap shadow-lg rounded-lg dark:bg-gray-800 m-5"
                style={{ width: "21rem" }}
                key={i}
                to={"/" + country.name}
              >
                <div className="w-full pb-1 md:pb-2">
                  <Country country={country} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
