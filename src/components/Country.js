const Country = (props) => {
  return (
    <div>
      <img
        src={props.country.flags.png}
        alt="country"
        className="object-cover"
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <div className="ml-4 mt-3">
        <div className="text-2xl font-bold mb-1">
          {props.country.name.common}
        </div>
        <div>
          <span className="font-bold">Population : </span>
          {props.country.population.toLocaleString("en-GB").replace(/,/g, ".")}
        </div>
        <div>
          <span className="font-bold">Region : </span>
          {props.country.region}
        </div>
        <div>
          <span className="font-bold">Capital : </span>
          {props.country.capital}
        </div>
      </div>
    </div>
  );
};

export default Country;
