/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { deleteRecipeIngredients } from '../api/mergedData';

export default function RecipeCard({ recipeObj, onUpdate }) {
  const { user } = useAuth();
  const router = useRouter();
  const deleteRecipeCard = () => {
    if (window.confirm(`Delete ${recipeObj.name}?`)) {
      deleteRecipeIngredients(recipeObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipeObj.photo} />
      <Card.Body>
        <Card.Title><Button variant="black" onClick={(e) => router.replace(`/recipes/${recipeObj.firebaseKey}`)}>{recipeObj.name}</Button></Card.Title>
        <Card.Text>
          {recipeObj.description}
        </Card.Text>
        {recipeObj.uid === user.uid ? (<Button variant="danger" onClick={deleteRecipeCard}>Delete</Button>) : ''}
        {recipeObj.uid === user.uid ? (<Button onClick={(e) => router.replace(`/recipes/edit/${recipeObj.firebaseKey}`)} variant="dark">Edit</Button>) : ''}
      </Card.Body>
    </Card>
  );
}

RecipeCard.propTypes = {
  recipeObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    instructions: PropTypes.string,
    photo: PropTypes.string,
    isPublic: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
