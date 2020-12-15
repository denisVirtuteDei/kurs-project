import { connect } from 'react-redux'
import AuthMenuLogic from '../Authorization/AuthMenuLogic'
import { setAccessLevel } from '../../Redux/Reducers/AuthReducer'

const mapStateToProps = (state) => {
    return {
        authInfo: state.authorization
    }
};

const mapDispatchToProps = ({
    setAccessLevel
})



export default connect(mapStateToProps, mapDispatchToProps)(AuthMenuLogic);