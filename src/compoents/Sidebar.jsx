/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Sidebar = ({recipeQ, handleRemove, prepareRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {

    return (
    <div className='md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100'>
            {/*Want to cook Table  */}
        <div className="overflow-x-auto ">
            <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Want to Cook: {recipeQ.length}</h2>
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {recipeQ.map((recipe, index) => (
                <tr key={index} className="hover">
                <th>{index+1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td><button 
                onClick={() => {handleRemove(
                recipe.recipe_id)
                calculateTimeAndCalories(recipe.preparing_time, recipe.calories)
                } }
                className="btn btn-sm bg-green-400 rounded-full px-2 py-1 md:px-4 md:py-2 my-2  
                text-sm text-gray-800 font-medium">
                    Preparing</button></td>
              </tr>
            ))}
            
            </tbody>
        </table>
        </div>
    {/* Currently cooking Table */}
    <div className="overflow-x-auto ">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Currently Cooking: {prepareRecipe.length}</h2>
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {prepareRecipe.map((recipe, index) => (
                <tr key={index} className="hover">
                <th>{index+1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
              </tr>
            ))}
            <tr>
                <th></th>
                <td></td>
                <td>Total Time: {totalTime}</td>
                <td>Total Calories: {totalCalories}</td>
            </tr>
            
            </tbody>
        </table>
        </div>
    </div>
    );
};

export default Sidebar;