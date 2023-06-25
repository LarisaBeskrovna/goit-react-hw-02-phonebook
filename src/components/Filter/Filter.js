import css from './filter.module.css';
import { Component } from 'react';

class Filter extends Component {
    state = {
        filter: ''
    };

    handleFilterInput = (e) => {
        const filterLine = e.target.name;
        this.setState({
            [filterLine]: e.target.value 
        })
        this.props.onGetFilterData({filter: this.state.filter});
    }


    render() {
        return (
            <div className={css.container}>
                <form className={css.container_form}>
                    <h2 className={css.find_title}>Find contacts by name</h2>
                    <input type='text' className={css.find_input} name='filter' value={this.state.filter} onChange={this.handleFilterInput}></input>
                </form>
            </div>
        )
    }
}

export default Filter;