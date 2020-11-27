import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions/EntityCompAction'
import { Container, Table } from 'react-bootstrap'


const EntityComponent = (props) => {

    // useEffect(() => {
    //     props.fetchAllEntityPersons()
    // }, [])

    let entityElements = props.entityList.map((record, index) => {
        return (
            <tr key={index}>
                <th>{record.unp}</th>
                <th>{record.shortOrgTitle}</th>
                <th>{record.orgAddress}</th>
                <th>{record.telephone}</th>
            </tr>)
    })

    return (
        < Container >
            <Table stripted brdered hover>
                <thead>
                    <tr>
                        <th># UNP</th>
                        <th>Org name</th>
                        <th>Org address</th>
                        <th>Telephone</th>
                    </tr >
                </thead>
                <tbody>
                    {entityElements}
                </tbody>
            </Table>
        </Container >
    )
};

const mapStateToProps = state => ({
    entityList: state.reducer.data
});

const mapActionToProps = {
    fetchAllEntityPersons: actions.fetchall
}

export default connect(mapStateToProps, mapActionToProps)(EntityComponent);