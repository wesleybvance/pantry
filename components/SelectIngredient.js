import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { getSpoonIngredients } from '../api/recipeIngredientsData';
import IngredientSelectOptions from './IngredientSelectOptions';

export default function SelectIngredient() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const getSearchResults = () => {
    getSpoonIngredients(searchInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') getSpoonIngredients(searchInput).then((data) => data[0]).then(setSearchResults);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} id="searchBar">
        <input className="form-control" type="text" placeholder="Search Ingredients" onChange={handleChange} value={searchInput} style={{ width: '300px', height: '40px' }} />
      </Form>
      <Form.Select aria-label="Default select example">
        {/* <option>Open this select menu</option> */}
        {searchResults.map((obj) => (
          <IngredientSelectOptions key={obj.name} ingredientObj={obj} onUpdate={getSearchResults} />
        ))}
      </Form.Select>
    </div>
  );
}
