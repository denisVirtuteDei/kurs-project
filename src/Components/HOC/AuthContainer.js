import { connect } from 'react-redux'
import AuthMenuLogic from '../Authorization/AuthMenuLogic'
import { getAuthToken, singOut } from '../../Redux/Actions/AuthAction'

const mapStateToProps = (state) => {
    return {
        authInfo: state.authorization
    }
};

const mapDispatchToProps = ({
    getAuthToken,
    singOut
})



export default connect(mapStateToProps, mapDispatchToProps)(AuthMenuLogic);