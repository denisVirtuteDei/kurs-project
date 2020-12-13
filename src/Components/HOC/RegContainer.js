import { connect } from 'react-redux'
import { fetchChecks, updateBankCheckCorrectness } from '../../Redux/Actions/BankCheckInfoAction'
import { fetchTaxes, updateDeclarationCorrectness } from '../../Redux/Actions/DeclarationAction'
import Registration from '../Employees/Registration';

const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration);