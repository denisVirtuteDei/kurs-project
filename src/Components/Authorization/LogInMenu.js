import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Modal,
    ModalTitle,
    ModalBody,
    FormGroup,
    FormLabel,
    FormControl,
    FormText,
    FormCheck
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const StyledButton = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
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
));


const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);


const LogInMenu = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        props.setAccessLevel('employees');
        setShow(false);
    }
    const handleShow = () => setShow(true);


    return (
        <div>
            <StyledButton
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
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
                        <FormGroup controlId="formBasicEmail">
                            <FormLabel>Email Address</FormLabel>
                            <FormControl type="emali" placeholder="Enter email" />
                            <FormText className="text-muted">
                                We'll never share your email
                            </FormText>
                        </FormGroup>
                        <FormGroup controlId="formBasicPassword">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" placeholder="Enter password" />
                        </FormGroup>
                        <FormGroup controlId="formBasicCheckbox">
                            <FormCheck type="checkbox" label="Remember me" />
                            <NavLink to={'/im/' + 'employees'}>
                                <Button onClick={handleClose}>Войти</Button>
                            </NavLink>
                        </FormGroup>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default LogInMenu;