import { connect } from 'react-redux'
import { fetchAllDebtInfo } from '../../Redux/Actions/DebtInfoAction'
import DebtInfoPart from '../Taxpayers/DebtInfoPart';

const mapStateToProps = (state) => {
    return {
        debtInfoList: state.debtInfo.debtList
    }
};

const mapDispatchToProps = ({
    fetchAllDebtInfo: fetchAllDebtInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(DebtInfoPart);