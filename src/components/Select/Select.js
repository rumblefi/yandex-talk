import React from 'react';
import SelectComponent from 'react-select';

const options = [
    {
        value: 'Лекс Лютер',
        label: 'Лекс Лютер'
    }, {
        value: 'Томас Андересон',
        label: 'Томас Андересон'
    }, {
        value: 'Дарт Вейдер',
        label: 'Дарт Вейдер'
    }, {
        value: 'Кларк Кент',
        label: 'Кларк Кент'
    }
];

const customStyles = {
    control: (base, state) => ({
        ...base,
        height: '38px',
        transitionDuration: '0.3s',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '4px',
        boxShadow: 'none',
        borderColor: state.isFocused
            ? '#007DFF'
            : '#E9ECEF',
        '&:hover': {
            borderColor: '#E9ECEF'
        }
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        dispay: 'none'
    })
}

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
            options={options}
            styles={customStyles}
            components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null
        }}/>);
    }
}