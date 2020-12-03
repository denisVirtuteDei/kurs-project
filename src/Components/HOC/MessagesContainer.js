import { connect } from 'react-redux'
import { fetchAllBankChecks, updateBankCheckCorrectness } from '../../Redux/Actions/BankCheckInfoAction'
import { fetchAllDeclaration, updateDeclarationCorrectness } from '../../Redux/Actions/DeclarationAction'
import Messages from '../Employees/Messages';

const mapStateToProps = (state) => {
    return {
        checkList: state.checkInfo.data,
        declarationList: state.declarations.data,
    };
};

const mapDispatchToProps = ({
    fetchAllBankChecks: fetchAllBankChecks,
    fetchAllDeclaration: fetchAllBankChecks,
    updateCheckCorrectness: updateBankCheckCorrectness,
    updateDeclarationCorrectness: updateDeclarationCorrectness
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);