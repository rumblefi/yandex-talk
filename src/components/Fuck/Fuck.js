import React from 'react';
import Select from 'react-select';

const selectStyles = {
    option: (base, state) => {
        console.log(state)
    }
}

const options = [
    {
        value: 'chocolate',
        label: 'Chocolate'
    }, {
        value: 'strawberry',
        label: 'Strawberry'
    }, {
        value: 'vanilla',
        label: 'Vanilla'
    }
];

class Fuck extends React.Component {
    state = {
        selectedOption: null
    }
    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        const {selectedOption} = this.state;

        return (<Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            style={selectStyles}
            defaultMenuIsOpen
        />);
    }
}

export default Fuck