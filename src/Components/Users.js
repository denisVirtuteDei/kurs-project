import React from 'react';
import EntityComponent from './EntityPersonsComponent/EntityComponent'
import { store } from '../Actions/Store.js'
import { Provider } from 'react-redux'

class Example extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <EntityComponent />
                </Provider>
            </div>
        )
    }
};

export const Users = () => {
    return (
        <Example />
    )
}