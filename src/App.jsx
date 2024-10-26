import { useState } from "react";
import Banner from "./compoents/Banner";
import Header from "./compoents/Header";
import OurRecipes from "./compoents/OurRecipes";
import Recipes from "./compoents/Recipes";
import Sidebar from "./compoents/Sidebar";

const App = () => {
  const [recipeQ, setRecipeQ] = useState([])
  const [prepareRecipe, setPreparedRecipe] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeToQ = recipe =>{
    const isExist = recipeQ.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    
    if(!isExist){
      setRecipeQ([...recipeQ, recipe])
    }
    else{
      alert('Already exist in the Queue!')
    }
  }
  
  const handleRemove = id => {
    // Find which recepie to remove
    const deletedRecipe = recipeQ.find(recipe => recipe.recipe_id === id)
    // remove from want to cook table
    const updatedQueue = recipeQ.filter(recipe => recipe.recipe_id !== id)
    setRecipeQ(updatedQueue)
    setPreparedRecipe([...prepareRecipe, deletedRecipe])
  }
  const calculateTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }

  return (
    <div className="container mx-auto px-4">
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* Recepie Section */}
      <OurRecipes/>
      {/* Recepie Card Section */}
      <section className="flex flex-col md:flex-row gap-6 w-10/12 mx-auto">
        {/* Card Section */}
        <Recipes addRecipeToQ ={addRecipeToQ} />
        {/* Sidebar */}
        <Sidebar handleRemove={handleRemove} 
        recipeQ = {recipeQ} 
        prepareRecipe={prepareRecipe} 
        calculateTimeAndCalories={calculateTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}/>
      </section>
    </div>
  );
};

export default App;