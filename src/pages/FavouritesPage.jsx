import { FaHeartBroken } from 'react-icons/fa';
import RecipeCard from '../components/RecipeCard';

const FavouritesPage = ({ favourites }) => {

  if (favourites?.length === 0) {
    return (
      <div className="flex flex-col items-center gap-6 mt-10 p-4 flex-1 bg-base-100 dark:bg-base-900 text-base-content dark:text-base-content">
        <FaHeartBroken className="text-red-500 text-6xl" />
        <h2 className="font-bold text-3xl">علاقه‌مندی‌های شما خالی است.</h2>
        <p className="text-lg text-center max-w-md">
          به نظر می‌رسد شما هنوز هیچ غذایی را به علاقه‌مندی‌های خود اضافه نکرده‌اید.
          برای افزودن غذا به علاقه‌مندی‌های خود، بر روی آیکون قلب در کارت غذا کلیک کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-10 p-4 flex-1 bg-base-100 dark:bg-base-900 text-base-content dark:text-base-content">
      <h2 className="font-bold text-3xl">علاقه‌مندی‌ها</h2>
      <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {favourites?.map((item, index) => (
          <RecipeCard
           item={item}
           key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;