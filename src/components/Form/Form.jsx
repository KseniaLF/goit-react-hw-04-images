import { useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { Header } from './Form.styled';

export const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleNameChange = event => {
    setValue(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      toast.error('Enter the name');
      return;
    }

    onSubmit(value);
    setValue('');
  };

  return (
    <Header>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <AiOutlineSearch />
        </button>

        <input
          type="text"
          name="pokemonName"
          placeholder="Search images and photos"
          value={value}
          onChange={handleNameChange}
        />
      </form>
    </Header>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
