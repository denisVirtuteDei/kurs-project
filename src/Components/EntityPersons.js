import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

const EntityPersons = () => {
  const dispatch = useDispatch()
  const entityList = useSelector(state => state.entityList)

  useEffect(() => {
    //dispatch(fetchAllEntityPersons())
  }, [])

  return (
    <Container>
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
          {entityList.map((record, index) => (
            <tr key={index}>
              <th>{record.unp}</th>
              <th>{record.shortOrgTitle}</th>
              <th>{record.orgAddress}</th>
              <th>{record.telephone}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default EntityPersons
