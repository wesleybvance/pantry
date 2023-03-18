import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Head from 'next/head';
import { createRecipe, updateRecipe } from '../../api/recipeData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  name: '',
  description: '',
  instructions: '',
  photo: '',
  isPublic: false,
};

export default function RecipeForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

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
      updateRecipe(formInput)
        .then(() => router.replace('/recipes/user'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createRecipe(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateRecipe(patchPayload).then(() => {
          router.replace(`/recipes/${patchPayload.firebaseKey}`);
        });
      });
    }
  };

  return (
    <div className="board-form-container">
      <Head><title>{obj.firebaseKey ? `Update Recipe: ${obj.name}` : 'Add New Recipe'}</title></Head>

      <Form onSubmit={handleSubmit} className="text-color-drkblu">
        <h2 className="mt-5 text-center">{obj.firebaseKey ? `Update ${obj.name}` : 'Add New Recipe'}</h2>
        <div className="mt-5" />
        <div className="">Recipe Name</div>
        <FloatingLabel
          controlId="floatingInput1"
          label="Recipe Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Recipe Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="">Description</div>
        <FloatingLabel
          controlId="floatingInput2"
          label="Recipe Description"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Description"
            style={{ height: '100px' }}
            name="description"
            value={formInput.description}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="">Instructions</div>
        <FloatingLabel
          controlId="floatingInput2"
          label="Recipe Instructions"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Instructions"
            style={{ height: '100px' }}
            name="instructions"
            value={formInput.instructions}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <div className="">Recipe Image URL</div>
        <FloatingLabel
          controlId="floatingInput3"
          label="Image URL"
          className="mb-3"
        >
          <Form.Control
            type="url"
            placeholder="Recipe Image URL"
            name="photo"
            value={formInput.photo}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
        <Form.Check
          className="mb-3"
          type="switch"
          id="privacy"
          name="isPublic"
          label="Make Recipe Public?"
          checked={formInput.isPublic}
          onChange={(e) => {
            setFormInput((prevState) => ({
              ...prevState,
              isPublic: e.target.checked,
            }));
          }}
        />
        <Button type="submit" variant="outline-dark" className="m-2 text-color-drkblu">{obj.firebaseKey ? 'Update' : 'Create'}</Button>
      </Form>
    </div>
  );
}

RecipeForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    instructions: PropTypes.string,
    photo: PropTypes.string,
    isPublic: PropTypes.bool,
    uid: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

RecipeForm.defaultProps = {
  obj: initialState,
};
