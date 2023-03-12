/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { deleteRecipeIngredients } from '../api/mergedData';

export default function RecipeCard({ recipeObj, onUpdate }) {
  const { user } = useAuth();
  const deleteRecipeCard = () => {
    if (window.confirm(`Delete ${recipeObj.name}?`)) {
      deleteRecipeIngredients(recipeObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={recipeObj.photo} />
      <Card.Body>
        <Link passHref href={`recipes/${recipeObj.firebaseKey}`}><Card.Title>{recipeObj.name}</Card.Title></Link>
        <Card.Text>
          {recipeObj.description}
        </Card.Text>
        {recipeObj.uid === user.uid ? (<Button variant="primary" onClick={deleteRecipeCard}>Delete</Button>) : ''}
        {recipeObj.uid === user.uid ? (<Link passHref href={`recipes/edit/${recipeObj.firebaseKey}`}><Button variant="primary">Edit</Button></Link>) : ''}
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
