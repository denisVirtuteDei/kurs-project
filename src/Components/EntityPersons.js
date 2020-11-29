import React, { useEffect } from 'react';
import { Container, Table } from 'react-bootstrap'

export const EntityPersons = (props) => {

    useEffect(() => {
        props.fetchAllEntityPersons()
    })

    let entityElements = props.entityList.map((record, index) => {
        return (
            <tr key={index}>
                <th>{record.unp}</th>
                <th>{record.shortOrgTitle}</th>
                <th>{record.orgAddress}</th>
                <th>{record.telephone}</th>
            </tr>
        )
    })

    return (
        <Container >
            <Table stripted brdered hover>
                <thead>
                    <tr>
                        <th># UNP</th>
                        <th>Org name</th>
                        <th>Org address</th>
                        <th>Telephone</th>
                    </tr>
                </thead>
                <tbody>
                    {entityElements}
                </tbody>
            </Table>
        </Container >
    )
};
