import { Component } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { Header } from './Form.styled';

export class Form extends Component {
  state = {
    pokemonName: '',
  };

  handleNameChange = event => {
    this.setState({
      pokemonName: event.currentTarget.value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      toast.error('Enter the name');
      return;
    }

    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };

  render() {
    return (
      <Header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <AiOutlineSearch />
          </button>

          <input
            type="text"
            name="pokemonName"
            placeholder="Search images and photos"
            value={this.state.pokemonName}
            onChange={this.handleNameChange}
          />
        </form>
      </Header>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
