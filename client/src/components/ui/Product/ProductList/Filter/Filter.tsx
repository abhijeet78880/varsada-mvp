import { Divider } from 'antd';
import FilterCategory from './FilterCategory';

export default function Filter() {
  return (
    <div className="px-8">
      <FilterCategory />
      <Divider />
    </div>
  );
}
