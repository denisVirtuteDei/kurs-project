import { connect } from 'react-redux'
import { fetchByIdCheckInfo, createBankCheck } from '../../Redux/Actions/BankCheckInfoAction'
import { NewCheckPart } from '../Taxpayers/NewCheckPart';

const mapStateToProps = (state) => {
    return {
        checkInfoList: state.checkInfo.backChecks,
    };
};

const mapDispatchToProps = ({
    fetchByIdCheckInfo: fetchByIdCheckInfo,
    createCheck: createBankCheck
})

export default connect(mapStateToProps, mapDispatchToProps)(NewCheckPart);