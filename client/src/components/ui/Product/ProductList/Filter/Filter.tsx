import { Divider } from 'antd';
import FilterCategory from './FilterCategory';
import FilterPrice from './FilterPrice';
import FilterColor from './FilterColor';
import FilterSize from './FilterSize';
import FilterStyle from './FilterStyle';

export default function Filter() {
  return (
    <div className="px-8">
      <FilterCategory />
      <Divider />
      <FilterPrice />
      <Divider />
      <FilterColor />
      <Divider />
      <FilterSize />
      <Divider />
      <FilterStyle />
    </div>
  );
}
