import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SwitchBtn from "./SwitchBtn";

const SideBar = () => {
  const handleDarkAndLightMode = (value)=>{
    if (value){
      document.documentElement.setAttribute('data-theme', 'dark')
    }else{
      document.documentElement.setAttribute('data-theme', 'light')
    }
    
  }
  return (
    <div className="hidden sm:flex flex-col items-center  md:items-start px-2 p-2 sm:px-8 sm:p-4 md:p-8 md:px-20 shadow bg-base-200 dark:bg-base-800 min-h-screen">
      <div className="flex items-center gap-3 text-base-content dark:text-base-content">
        <img src="/recipe.png" alt="recipe logo" className="w-20 h-20 md:w-16 md:h-16" />
        <h2 className="text-nowrap hidden md:block">دست پخت یاب</h2>
      </div>
      <div className="mt-12 flex flex-col items-center md:items-start gap-12 md:gap-6">
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
    </div>
  );
};

export default SideBar;