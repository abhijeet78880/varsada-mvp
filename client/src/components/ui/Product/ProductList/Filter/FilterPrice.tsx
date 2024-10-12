import { Slider } from 'antd';
import type { SliderSingleProps } from 'antd';

const marks: SliderSingleProps['marks'] = {
  0: {
    style: {
      color: '#aaa',
    },
    label: <strong>0 Rs</strong>,
  },
  10000: {
    style: {
      color: '#aaa',
    },
    label: <strong>10000 Rs</strong>,
  },
};

export default function FilterPrice() {
  const onChangeSlider = () => {
    console.log();
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Price</h4>
      <Slider
        range
        marks={marks}
        // tooltip={{ open: true }}
        defaultValue={[100, 5000]}
        min={0}
        max={10000}
        step={100}
        onChange={onChangeSlider}
      />
    </div>
  );
}
