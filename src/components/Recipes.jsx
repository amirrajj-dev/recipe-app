import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaSadTear } from "react-icons/fa";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import SwitchBtn from "./SwitchBtn";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const Recipes = ({ recipes }) => {
  const [search, setSearch] = useState("");
  const [allRecipes, setAllRecipes] = useState(recipes);

  useEffect(() => {
    if (search.trim().length > 0) {
      setAllRecipes(recipes.filter(recipe => recipe.foodName.toLowerCase().includes(search.toLowerCase())));
    } else {
      setAllRecipes(recipes);
    }
  }, [search, setSearch, recipes]);

  const handleAddRecipeToFavourites = (recipe) => {
    const favourites = JSON.parse(localStorage.getItem("favourites"));
    if (favourites.length) {
      const existingRecipe = favourites.find((item) => item.id === recipe.id);
      if (existingRecipe) {
        toast.error("محصول انتخاب شده در علاقه مندی های شما وجود دارد", {
          position: 'bottom-center'
        });
        return
      }
      localStorage.setItem('favourites', JSON.stringify([...favourites, recipe]));
      toast.success('محصول مورد نظر با موفقیت به علاقه مندی های شما اضافه شد🍴', {
        position: 'bottom-center'
      })
    } else {
      toast.success('محصول مورد نظر با موفقیت به علاقه مندی های شما اضافه شد🍴', {
        position: 'bottom-center'
      })
      localStorage.setItem('favourites', JSON.stringify([recipe]))
    }
  }

  const handleDarkAndLightMode = (value)=>{
    if (value){
      document.documentElement.setAttribute('data-theme', 'dark')
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }

  return (
    <div className="flex flex-col gap-6 mt-10 p-4 flex-1 sm:flex-auto bg-base-100 dark:bg-base-900 text-base-content dark:text-base-content">
       <div className="flex sm:hidden justify-center items-center md:items-start gap-8">
        <Link to={'/'} className="flex items-center gap-2 text-base-content dark:text-base-content cursor-pointer">
          <IoHomeOutline className="w-7 h-7 md:w-auto md:h-auto" />
          <span className="hidden md:inline">خانه</span>
        </Link>
        <Link to={'/favourites'} className="flex items-center gap-2 text-base-content dark:text-base-content cursor-pointer">
          <FaRegHeart className="w-7 h-7 md:w-auto md:h-auto" />
          <span className="hidden text-nowrap md:inline">علاقه مندی ها</span>
        </Link>
        <SwitchBtn handleDarkAndLightMode={handleDarkAndLightMode} />
      </div>
      <div className="relative">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="دستور پخت چه جیزی رو میخوای یاد بگیری ؟"
          className="input input-sm rounded-sm py-5 bg-base-200 dark:bg-base-700 border-none ring-base-content text-base-content outline-none w-full"
        />
        <CiSearch className="absolute top-2 left-4 text-2xl font-bold text-base-content dark:text-base-content" />
      </div>
      <div className="">
        <h2 className="text-base-content dark:text-base-content font-bold text-3xl">دستور پخت های توصیه شده</h2>
        <h3 className="text-base-content dark:text-base-content mt-2 mb-4">انتخاب های محبوب</h3>
        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-auto">
          {allRecipes.length > 0 ? (
            allRecipes.map(item => (
              <RecipeCard key={item.id} item={item} handleAddRecipeToFavourites={handleAddRecipeToFavourites} />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center col-span-3 mt-10">
              <FaSadTear className="text-6xl text-base-content dark:text-base-content mb-4 animate-bounce" />
              <h2 className="text-base-content dark:text-base-content font-bold text-2xl">هیچ دستور پختی یافت نشد</h2>
              <p className="text-base-content dark:text-base-content text-lg">لطفاً جستجوی خود را تغییر دهید و دوباره امتحان کنید.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;