import { Checkbox } from 'antd';
import type { GetProp } from 'antd';
import { useState } from 'react';

export default function FilterCategory() {
  const [isVewMoreCategory, setIsViewMoreCategory] = useState(false);

  const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = (
    checkedValues
  ) => {
    console.log('checked = ', checkedValues);
  };

  const options = [
    { label: 'T-shirts', value: 'Apple' },
    { label: 'Shorts', value: 'Pear' },
    { label: 'Shirts', value: 'Orange' },
    { label: 'Hoode', value: 'hoode' },
    { label: 'Jeans', value: 'jeans' },
    { label: 'Denim', value: 'denim' },
    { label: 'Swim', value: 'swim' },
    { label: 'Active', value: 'active' },
  ];
  return (
    <div>
      <div className="flex flex-col gap-4">
        <h4>Category</h4>
        <Checkbox.Group
          options={isVewMoreCategory ? options : options.splice(0, 5)}
          onChange={onChange}
          className="body1 text-[#00000099] leading-5 font-[500] flex flex-col gap-3"
        />
      </div>
      <button
        className="mt-4 text-secondary body1"
        onClick={() => setIsViewMoreCategory(!isVewMoreCategory)}
      >
        {!isVewMoreCategory ? '+4 more' : 'View Less'}
      </button>
    </div>
  );
}
