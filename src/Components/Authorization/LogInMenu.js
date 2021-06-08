import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import {
  Modal,
  ModalTitle,
  ModalBody,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  FormCheck,
} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import { useDispatch } from 'react-redux'
import { getAuthTokenRequest } from '../../Redux/Actions/AuthAction'

const StyledButton = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Button
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const LogInMenu = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginClick = () => {
    username && password && dispatch(getAuthTokenRequest(username, password))
  }
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div>
      <StyledButton
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleShow}
      >
        Log In
      </StyledButton>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton onClick={handleClose}>
          <ModalTitle>Log In</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <form>
            <FormGroup controlId='formBasicEmail'>
              <FormLabel>Email Address</FormLabel>
              <FormControl
                type='email'
                placeholder='Enter email'
                onChange={e => setUsername(e.target.value)}
              />
              <FormText className='text-muted'>We'll never share your email</FormText>
            </FormGroup>
            <FormGroup controlId='formBasicPassword'>
              <FormLabel>Password</FormLabel>
              <FormControl
                type='password'
                placeholder='Enter password'
                onChange={e => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId='formBasicCheckbox'>
              <FormCheck type='checkbox' label='Remember me' />
              <Button onClick={loginClick}>Войти</Button>
            </FormGroup>
          </form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default LogInMenu
