import React from 'react';
import Card from './Card.js';
import { render } from '@testing-library/react';

const People = ({people}) => {
  render()
  return (
    <div> 
      {
        people.map(person => {
        return (
          <Card 
          name = {person.name}
          hairColor = {person.hair_color}/>
        );
      })
      }
    </div>
  );
}  
export default People