import React from 'react';
import SelectComponent from 'react-select';
import Option from '../Option/Option'

const options = [
    {
        value: 'Лекс Лютер',
        label: 'Лекс Лютер',
        img: 'https://cdn.pornpics.com/pics/2015-11-01/200026_02big.jpg' 
    },
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
            borderColor: '#007DFF'
        }
    }),
    menu: (base, state) => ({
        ...base,
        margin: '0',
        boxShadow: '0 1px 10px 0 rgba(0,44,92,0.28)'
    }),
    menuList: (base, state) => ({
        ...base,
        padding: 0
    }),
    multiValueRemove: (base, state) => ({
        ...base,
        backgroundColor: 'red'
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
            noOptionsMessage={() => "Не найдено"}
            components={{
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
                Option
            }}
            defaultMenuIsOpen
            isMulti
        />);
    }
}