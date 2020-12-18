import React from 'react'
import { connect } from 'react-redux'
import { fetchChecks, updateBankCheckCorrectness } from '../../Redux/Actions/BankCheckInfoAction'
import { fetchTaxes, updateDeclarationCorrectness } from '../../Redux/Actions/DeclarationAction'
import MessageHeader from '../Employees/MessageHeader';
import 'date-fns';

class Messages extends React.Component {

    constructor(props){
        super(props);

        this.update = this.update.bind(this);
    }

    componentDidMount() {
        const date = new Date();
        this.update(date.setMonth(date.getMonth() - 1));
    }

    createChecks(el, func) {
        return {
            unp: el.unp,
            fio: el.fName + el.mName + el.sName,
            type: 'Check',
            func: func,
            data: {
                id: el.checkId,
                fkRegPerson: el.fkRegPerson,
                title: el.checkTitle,
                finalSum: el.finalSum,
                payedDate: el.payedDate,
                isDebtRep: el.isDebtRep,
                isCorrect: el.isCorrect,
            }
        }
    }

    createDeclaration(el, func) {
        return {
            unp: el.unp,
            fio: el.fName + el.mName + el.sName,
            title: el.checkTitle,
            type: 'Declaration',
            func: func,
            data: {
                id: el.taxesId,
                fkNcea: el.fkNcea,
                fkBankCheck: el.fkBankCheck,
                taxAmount: el.taxAmount,
                isCorrect: el.isCorrect,
            },
        }
    }

    update(selectedDate) {
        this.props.fetchTaxes(selectedDate);
        this.props.fetchChecks(selectedDate);
    }

    render() {
        return (
            <MessageHeader
                {...this.props}
                update={this.update}
                createDeclaration={this.createDeclaration}
                createChecks={this.createChecks}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        checkList: state.checkInfo.backChecks,
        declarationList: state.declarations.payedTaxes
    };
};

const mapDispatchToProps = ({
    fetchChecks,
    fetchTaxes,
    updateDeclarationCorrectness,
    updateCheckCorrectness: updateBankCheckCorrectness
})

export default connect(mapStateToProps, mapDispatchToProps)(Messages);