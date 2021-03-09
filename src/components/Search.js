const Search = (props) => {
  return (
    <div className="flex relative">
      <span className="rounded-l-md h-12 w-12 inline-flex items-center pl-3 bg-white dark:bg-gray-700 text-gray-500 dark:text-white shadow-sm">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="30px"
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
      </span>
      <input
        type="text"
        className="rounded-r-lg flex-1 h-12 w-60 outline-none py-1 px-4 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-100 shadow-sm text-base"
        placeholder="Search Country"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
