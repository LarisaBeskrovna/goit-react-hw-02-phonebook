import css from './filter.module.css';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  handleFilterInput = e => {
    this.props.filterChange(e.target.value);
  };

  render() {
    return (
      <div className={css.container}>
        <h2 className={css.find_title}>Find contacts by name</h2>
        <input
          type="text"
          className={css.find_input}
          name="filter"
          value={this.props.state.filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.handleFilterInput}
        />
      </div>
    );
  }
}
Filter.propTypes = {
  state: PropTypes.object.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default Filter;
