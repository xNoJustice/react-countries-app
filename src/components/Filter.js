const Filter = (props) => {
  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <div>
      <label className="block">
        <label className="text-base mr-1 font-semibold leading-7 text-gray-600 dark:text-white">
          Filter by Region
        </label>
        <select
          className="mt-1 py-3 px-6 bg-white dark:bg-gray-700 dark:text-white rounded-md shadow-sm sm:text-md"
          onChange={(e) => props.setFilter(e.target.value)}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
export default Filter;
