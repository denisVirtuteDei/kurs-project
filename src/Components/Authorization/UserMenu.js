import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { singOut } from '../../Redux/Actions/AuthAction'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
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

const StyledMenuItem = withStyles(theme => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

const UserMenu = props => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const getPrior = prior => {
    switch (prior) {
      case 'ceo':
        return 'employees'
      case 'employee':
        return 'employees'
      case 'user':
        return 'taxpayers'
      default:
        return ''
    }
  }

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        color='primary'
        onClick={handleClick}
      >
        {props.username}
      </Button>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
      >
        <NavLink
          to={'/im/' + getPrior(props.priority)}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <StyledMenuItem onClick={handleClose}>
            <ListItemIcon>
              <SendIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Private office' />
          </StyledMenuItem>
        </NavLink>
        <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <StyledMenuItem
            onClick={() => {
              handleClose()
              dispatch(singOut())
            }}
          >
            <ListItemIcon>
              <DraftsIcon fontSize='small' />
            </ListItemIcon>
            <ListItemText primary='Log out' />
          </StyledMenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  )
}

export default UserMenu
