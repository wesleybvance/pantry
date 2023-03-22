/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createIngredient, updateIngredient } from '../../api/ingredientsData';
import { getSpoonIngredient } from '../../api/recipeIngredientsData';

// ADD INGREDIENT FORM COMPONENT - includes Search/Select Ingredient from Spoonacular (GET Search Results), on submit GET Single Ingredient with user-input values for unit and amount, POST

const initialState = {
  name: '',
  amount: 0,
  id: 0,
  photo: '',
  unit: '',
};

const initialStateS = 0;

export default function IngredientForm({
  obj, select, handleClose, afterSubmit,
}) {
  const [formInput, setFormInput] = useState(initialState);
  const [ingredientSelect, setIngredientSelect] = useState(0);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } if (select) setIngredientSelect(select);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obj.firebaseKey, select, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      formInput.amount = Number(formInput.amount);
      updateIngredient(formInput);
      router.replace('/pantry');
      handleClose();
    } else {
      getSpoonIngredient(ingredientSelect, formInput.amount, formInput.unit).then((data) => {
        const payload = {
          name: data.name,
          id: data.id,
          unit: formInput.unit,
          photo: `https://spoonacular.com/cdn/ingredients_100x100/${data.image}`,
          amount: data.amount,
          uid: user.uid,
        };
        createIngredient(payload).then(({ name }) => {
          const patchPayload = { firebaseKey: name };
          updateIngredient(patchPayload);
        }).then(() => {
          afterSubmit();
          handleClose();
        });
      });
    }
  };

  return (
    <div className="board-form-container">
      <Form onSubmit={handleSubmit} className="text-color-drkblu">
        <div className="mt-5" />
        {obj.firebaseKey ? (
          <><Form.Control
            type="text"
            placeholder={formInput.name}
            aria-label="Disabled input example"
            readOnly
          /><br />
          </>
        ) : ''}
        <FloatingLabel
          controlId="floatingInput1"
          label="Amount"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Amount"
            name="amount"
            value={Number(formInput.amount)}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Form.Select
          aria-label="Default select example"
          onChange={handleChange}
          name="unit"
          value={formInput.unit}
          required
        >
          <option>SELECT UNIT</option>
          <option value="">none</option>
          <option value="grams">grams</option>
          <option value="ounces">ounces</option>
          <option value="mL">milliliters</option>
          <option value="tsp">teaspoon</option>
          <option value="tbsp">tablespoon</option>
          <option value="cup">cup</option>
        </Form.Select>
        <Button type="submit" variant="outline-dark" className="m-2 text-color-drkblu">{obj.firebaseKey ? 'Update' : 'Create'}</Button>
      </Form>
    </div>
  );
}

IngredientForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    amount: PropTypes.number,
    firebaseKey: PropTypes.string,
    id: PropTypes.number,
    photo: PropTypes.string,
    uid: PropTypes.string,
    unit: PropTypes.string,
  }),
  select: PropTypes.number,
  handleClose: PropTypes.func.isRequired,
  afterSubmit: PropTypes.func,
};

IngredientForm.defaultProps = {
  obj: initialState,
  select: initialStateS,
  afterSubmit: () => {},
};
