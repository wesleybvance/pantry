import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { getSpoonIngredients } from '../api/recipeIngredientsData';
import IngredientSelectOptions from './IngredientSelectOptions';

export default function SelectIngredient({ handleIngredientId }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const selectionChange = (val) => {
    const num = Number(val);
    setSelectedValue(num);
  };

  const handleSelectChange = (e) => {
    selectionChange(e.target.value);
    setSearchInput('');
  };

  useEffect(() => {
    handleIngredientId(selectedValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    if (searchInput !== '') getSpoonIngredients(searchInput).then((data) => data[0]).then(setSearchResults);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const getSearchResults = () => {
    getSpoonIngredients(searchInput);
  };
  return (
    <div>
      <Form id="searchBar">
        <input className="form-control" type="text" placeholder="Search..." onChange={handleSearchChange} onSubmit={handleSearchSubmit} value={searchInput} style={{ width: '300px', height: '40px' }} />
      </Form>
      <Form.Select aria-label="Default select example" onChange={handleSelectChange} required>
        <option>Select Ingredient</option>
        {searchResults.map((obj) => (
          <IngredientSelectOptions key={obj.name} ingredientObj={obj} onUpdate={getSearchResults} />
        ))}
      </Form.Select>
    </div>
  );
}

SelectIngredient.propTypes = {
  handleIngredientId: PropTypes.func.isRequired,
};
