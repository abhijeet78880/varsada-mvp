import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getCategory } from '../../../kv';

type Category = {
  id: string;
  name: string;
  thumbnail: string;
  isActive: boolean;
  isVisible: boolean;
};

type Data = {
  category: Category[];
};

const fetchCategories = async (): Promise<Data> => {
  const res = await fetch(getCategory);
  if (!res.ok) throw new Error('Failed to fetch categories');
  return res.json();
};

export default function Category() {
  const { data, isLoading, error } = useQuery<Data>({
    queryKey: ['category'],
    queryFn: fetchCategories,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories.</p>;

  return (
    <section className="py-11">
      <div></div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="capitalize">shop by category</h3>
        <a href="" className="body1">
          view more
        </a>
      </div>
      <div className="pt-11 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {data?.category?.slice(0, 4).map((cat) => (
          <div key={cat.id} className="bg-red-50 relative cursor-pointer zoom">
            <Link to="/productlist?category=shorts">
              <img
                src={cat.thumbnail}
                className="object-cover filter brightness-75 w-full h-full"
              />
              <div className="w-full h-full absolute top-0 left-0 flex text-white font-bold sm:text-xl capitalize justify-center items-center">
                {cat.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
