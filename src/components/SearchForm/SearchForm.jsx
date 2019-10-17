import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    input: '',
  };

  handleInput = e => {
    // const { value } = target;
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { input } = this.state;

    onSubmit(input);
    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;
    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images..."
          value={input}
          onChange={this.handleInput}
        />
      </form>
    );
  }
}
