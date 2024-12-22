import { Route, Routes } from "react-router-dom";
import Recipes from './components/Recipes'
import SideBar from "./components/SideBar";
import FavouritesPage from "./pages/FavouritesPage";
import { useEffect, useState } from "react";
import { recipes } from "./db/data";
import {useLocation} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
const App = () => {
  const location = useLocation()
  const [recipesItems , setRecipesItems] = useState(recipes)
  const [favouriteRecipes , setfavouriteRecipes] = useState([])

  useEffect(()=>{
    const favourites = localStorage.getItem('favourites')
    if (favourites){
      setfavouriteRecipes(JSON.parse(favourites))
    }else{
      localStorage.setItem('favourites', JSON.stringify([]))
    }
  } , [location.pathname])

  return (
    <>
    <div className="">
      <div className="flex gap-4 md:gap-8">
      <SideBar/>
      <Routes>
        <Route path="/" element={<Recipes recipes={recipesItems} />} />
        <Route path="/favourites" element={<FavouritesPage favourites={favouriteRecipes} />} />
      </Routes>
      </div>
      <Toaster/>
    </div>
    </>
  );
};

export default App;