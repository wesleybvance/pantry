import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function UserRecipeSearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== '') router.replace(`/recipes/user/search/${searchInput}`);
    setSearchInput('');
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} id="searchBar">
        <input className="form-control" type="text" placeholder="Search Recipes" onChange={handleChange} value={searchInput} style={{ width: '300px', height: '40px' }} />
      </Form>
    </div>
  );
}
