import data from '../data.json';
import { useState } from 'react';

export default function MyProjects() {
   const [index, setIndex] = useState(0);

   let patterns = data.projects;
   let pattern = patterns[index];

   function handleClick() {
    if (index < data.projects.length-1)
    {
       setIndex(index + 1);
    }
    else 
    {
       setIndex(0);
    }
 }

  return (
    <>
      <h2>{pattern.name}</h2>
      <h3>Designed by {pattern.designer}</h3>
      <p>Difficulty: {pattern.difficulty}</p>
      <img src={pattern.photoUrl} alt={pattern.name} className="project"></img>
      <br/>
      <button onClick={handleClick}>Next</button>
    </>
  );
}
