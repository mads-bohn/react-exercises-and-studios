import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {label: "Potluck Party", value: "Potluck"},
      {label: "Desserts", value: "Desserts"},
      {label: "Baking Recipes", value: "Baking"}];

   const [boardName, setName] = useState('no boards yet!');

   const handleChange = (event) => {
      setName(event.target.value);
   }


   return (
      <div style={{paddingTop: "50px"}}>
         <label>Save to Board: </label>

         <select value={boardName} onChange={handleChange}>
            {boards.map(function(data) {
               return (
                  <option key={data.value} value={data.value}> {data.label} </option>
               )
            })}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   );
}
