import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import ProductCheckOutCard from '../Product/ProductCheckOutCard';

export default function ProductSelect() {
  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div>
      <div>
        <Checkbox onChange={onChange}>
          {' '}
          <span className="ml-2 body1 text-black">4/4 selected</span>{' '}
        </Checkbox>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="flex justify-start items-start gap-4">
          <Checkbox onChange={onChange}></Checkbox>
          <ProductCheckOutCard />
        </div>
      </div>
    </div>
  );
}
