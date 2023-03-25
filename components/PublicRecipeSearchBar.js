import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function PublicRecipeSearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') router.replace(`/recipes/public/search/${searchInput}`);
    setSearchInput('');
  };
  return (
    <div className="search-bar-container">
      <Form onSubmit={handleSubmit} id="searchBar">
        <input className="form-control search-bar" type="text" placeholder="Search Public Recipes" onChange={handleChange} value={searchInput} style={{ width: '1210px', height: '50px', margin: '15px' }} />
      </Form>
      <Button variant="light" className="search-btn" onClick={handleSubmit}>Search</Button>
    </div>
  );
}
