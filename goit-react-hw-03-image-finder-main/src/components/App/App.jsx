import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'components/Form/Form';
import { Galery } from 'components/Galery/Galery';

export class App extends Component {
  state = {
    queryValue: '',
  };

  handleFormSubmit = queryValue => {
    this.setState({ queryValue: queryValue });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit} />

        <Galery queryValue={this.state.queryValue} />

        <ToastContainer style={{ fontSize: '15px' }} />
      </div>
    );
  }
}
