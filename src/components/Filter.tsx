// pass through server-side filter function to filter on the server
const Filter = () => {
  return (
    <button className="bg-white border border-gray-200 rounded-lg p-1 text-gray-500 flex flex-row gap-2 items-center hover:bg-gray-200 w-fit">
      <img src="/filter-icon.svg" width={20} height={20} alt="filter" />
      <div>Filter</div>
      <div>16</div>
      <img src="/chevron-down.svg" width={15} height={15} alt="filter" />
    </button>
  );
};

export default Filter;
