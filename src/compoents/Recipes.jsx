import { useEffect, useState } from "react";

const Recipes = ({addRecipeToQ}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch('./recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    console.log(recipes)


    return (
        <div className='md:w-2/3'> 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recipes.map(recipe => (
            <div key={recipe.recipe_id} className="card bg-base-100 w-96 border-2">
            <figure>
              <img
                src={recipe.recipe_image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl text-gray-800 font-semibold">{recipe.recipe_name}</h2>
              <p className="text-gray-600">{recipe.short_description}</p>
              <hr />
              <h3 className="font-bold">Ingredients: {recipe.ingredients.length}</h3>
              <ul className="ml-8">
                {recipe.ingredients.map((item, index) => (<li className="list-disc text-gray-600" key={index}>{item}</li>))}
              </ul>
              <hr />
              <div className="flex gap-4">
                <div className="flex items-center">
                <i className="fa-regular fa-clock text-xl"></i>
                <p className="ml-2">{recipe.preparing_time}</p>
                </div>
                <div className="flex items-center">
                <i className="fa-solid fa-fire text-xl"></i>
                <p className="ml-2">{recipe.calories}</p>
                </div>
              </div>
              <div className="card-actions ">
                <button onClick={() => addRecipeToQ(recipe)} className="btn bg-green-400 rounded-full px-8 text-xl text-gray-800 mt-6 font-medium">Want to Cook</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        </div>
    )
    
};

export default Recipes;