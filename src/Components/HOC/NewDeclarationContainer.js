import { connect } from 'react-redux'
import { fetchAllNceaInfo } from '../../Redux/Actions/NceaInfoAction'
import { fetchByIdCheckInfo } from '../../Redux/Actions/BankCheckInfoAction'
import { createDeclaration } from '../../Redux/Actions/DeclarationAction'
import { NewDeclarationPart } from '../Taxpayers/NewDeclarationPart';

const mapStateToProps = (state) => {
    return {
        nceaInfoList: state.ncea.data,
        checkInfoList: state.checkInfo.data,
        
    };
};

const mapDispatchToProps = ({
    fetchAllNceaInfo: fetchAllNceaInfo,
    fetchByIdCheckInfo: fetchByIdCheckInfo,
    createDeclaration: createDeclaration
})

export default connect(mapStateToProps, mapDispatchToProps)(NewDeclarationPart);