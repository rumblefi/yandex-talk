import React from 'react';
import SelectComponent from 'react-select';
import Option from '../Option/Option'
import {selectStyles} from './selectStyles'
import './Select.scss'

export default class Select extends React.Component {
    
    handleChange = (selectedOptions) => {
        this.props.onSelectChange(selectedOptions)
    }

    render() {

        const {value,selectPlaceholder,optionsData} = this.props

        return (<SelectComponent
            value={value}
            onChange={this.handleChange}
            placeholder={selectPlaceholder}
            options={optionsData}
            styles={selectStyles}
            noOptionsMessage={() => "Не найдено"}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
                Option
            }}
            isMulti
            autosize={false}

            // defaultMenuIsOpen
        />);
    }
}