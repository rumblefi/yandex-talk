import React from 'react';
import SelectComponent from 'react-select';
import Option from '../Option/Option'
import {selectStyles} from './selectStyles'
import {selectOptionsData} from './selectOptionsData'

export default class Select extends React.Component {
    state = {
        selectedOption: null
    }
    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const {selectedOption} = this.state;

        return (<SelectComponent
            value={selectedOption}
            onChange={this.handleChange}
            options={selectOptionsData}
            styles={selectStyles}
            noOptionsMessage={() => "Не найдено"}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
                Option
            }}
            className="react-select"
            defaultMenuIsOpen
        />);
    }
}