import React from 'react';
import EntityComponent from './EntityPersonsComponent/EntityComponent'
import { store } from '../Actions/Store.js'
import { Provider } from 'react-redux'

class Example extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <EntityComponent />
            </Provider>
        )
    }
};

export const Users = () => {
    return (
        <Example />
    )
}