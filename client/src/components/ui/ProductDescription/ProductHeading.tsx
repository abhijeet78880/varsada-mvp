import { PurpleHeartIcon, PurpleShareIcon } from '../../../assets/icons';

export default function ProductHeading() {
  return (
    <>
      <div className="flex justify-betweeen items-center gap-4 mt-8">
        <h4 className="text-3xl">
          Girls long sleeve deep uneck hollow out plated mini dress
        </h4>
        <div className="flex">
          <PurpleHeartIcon />
          <PurpleShareIcon />
        </div>
      </div>
    </>
  );
}
