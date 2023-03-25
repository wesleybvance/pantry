import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { getSpoonIngredients } from '../api/recipeIngredientsData';
import IngredientSelectOptions from './IngredientSelectOptions';

const initialStateS = {
  name: '',
  amount: 0,
  id: 0,
  photo: '',
  unit: '',
};

export default function SelectIngredient({ handleIngredientId, selection }) {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const selectionChange = (val) => {
    const num = Number(val);
    setSelectedValue(num);
  };

  const handleSelectChange = (e) => {
    selectionChange(e.target.value);
  };

  useEffect(() => {
    if (selection) {
      setSelectedValue(selection.id);
      setSearchInput(selection.name);
    }
    handleIngredientId(selectedValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
    if (searchInput !== '') getSpoonIngredients(searchInput).then((data) => data[0]).then(setSearchResults);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getSearchResults = () => {
    getSpoonIngredients(searchInput);
  };
  return (
    <div>
      <Form className="modal-input select-form" id="searchBar" onSubmit={handleSubmit}>
        <input className="form-control" type="text" placeholder="Search..." onChange={handleSearchChange} onSubmit={handleSubmit} value={searchInput} style={{ width: '300px', height: '40px' }} />
        <Button className="select-ing-btn" variant="dark">go</Button>
      </Form>
      <Form.Select aria-label="Default select example" onChange={handleSelectChange} onSubmit={handleSubmit} required>
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
  selection: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    firebaseKey: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
    uid: PropTypes.string,
    unit: PropTypes.string,
  }),
};

SelectIngredient.defaultProps = {
  selection: initialStateS,
};
