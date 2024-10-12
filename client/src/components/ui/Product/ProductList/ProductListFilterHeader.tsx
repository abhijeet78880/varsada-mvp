import { FilterIcon } from '../../../../assets/icons';

export default function ProductListFilterHeader() {
  return (
    <div className="grid grid-cols-[30%_70%] my-4 gap-8">
      <div className="flex justify-between">
        <span className="flex justify-center items-center gap-2">
          <i>
            <FilterIcon />
          </i>
          <h4>Hide Filters</h4>
        </span>
        <button className="text-[20px] leading-6 text-secondary font-bold">
          Clear All
        </button>
      </div>

      <div className="flex gap-4">
        <div className="bg-secondary py-2 px-4 flex gap-4 caption text-white rounded-full">
          <p>Crop Top</p>
          <button>x</button>
        </div>
        <div className="bg-secondary py-2 px-4 flex gap-4 caption text-white rounded-full">
          <p>Denim</p>
          <button>x</button>
        </div>
        <div className="bg-secondary py-2 px-4 flex gap-4 caption text-white rounded-full">
          <p>Casual</p>
          <button>x</button>
        </div>
      </div>
    </div>
  );
}
