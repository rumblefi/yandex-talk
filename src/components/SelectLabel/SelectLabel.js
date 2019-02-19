import React from 'react'
import './SelectLabel.scss'
import Label from '../Label/Label'
import Select from '../Select/Select'
import User from '../User/User'
import UsersHolder from '../UsersHolder/UsersHolder'
import {selectOptions} from '../../fixtures/selectOptions'

export default class SelectLabel extends React.Component {

    state = {
        selectedOptions: []
    }

    handleSelectChange = (selectedOptions) => {
        this.setState({selectedOptions})
    }

    handleUserClose = (userId) => {
        this.setState( ({selectedOptions}) => ({
            selectedOptions: selectedOptions.filter( (user) => user.id !== userId )
        }))
    }

    render() {
        const {className, title, selectPlaceholder} = this.props
        const {selectedOptions} = this.state

        const users = selectedOptions.map(user => (<User
            key={user.id}
            userId={user.id}
            className="users-holder__item"
            imgSrc={user.img}
            username={user.label}
            onUserClose={this.handleUserClose}
        />))

        return (
            <Label className={className} title={title}>
                <Select
                    value={selectedOptions}
                    onSelectChange={this.handleSelectChange}
                    selectPlaceholder={selectPlaceholder}
                    optionsData={selectOptions}/>
                <UsersHolder>
                    {users}
                </UsersHolder>
            </Label>
        )

    }
}