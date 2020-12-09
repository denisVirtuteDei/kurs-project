import { connect } from 'react-redux'
import { fetchChecks, updateBankCheckCorrectness } from '../../Redux/Actions/BankCheckInfoAction'
import { fetchTaxes, updateDeclarationCorrectness } from '../../Redux/Actions/DeclarationAction'
import Messages from '../Employees/Messages';

const mapStateToProps = (state) => {
    return {
        checkList: state.checkInfo.data,
        declarationList: state.declarations.data,
    };
};

const mapDispatchToProps = ({
    fetchChecks: fetchChecks,
    fetchTaxes: fetchTaxes,
    updateCheckCorrectness: updateBankCheckCorrectness,
    updateDeclarationCorrectness: updateDeclarationCorrectness
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);