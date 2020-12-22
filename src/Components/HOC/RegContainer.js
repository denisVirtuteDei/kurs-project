import React from 'react';
import api from '../../Redux/Actions/Api';
import { connect } from 'react-redux';
import { createEntity, createSelfPerson, createIndividPerson } from '../../Redux/Actions/CreatePersonsAction';
import { fetchAllNceaInfo } from '../../Redux/Actions/NceaInfoAction';
import Registration from '../Employees/Registration';

const entityUrl = 'https://localhost:44383/api/createperson/entity';
const selfUrl = 'https://localhost:44383/api/createperson/self';
const individUrl = 'https://localhost:44383/api/createperson/individ';
const regUrl = 'https://localhost:44383/api/personregistration';

class Reg extends React.Component {

    componentDidMount() {
        this.props.fetchAllNceaInfo();
    }

    createEntity = (data, regData) => {
        debugger
        api
            .crudApi(entityUrl)
            .create(data)
            .then(response => {
                if (response.data.personId !== -1) {
                    this.getExecutorId(regData, response.data.personId);
                }
            })
            .catch(err => console.log(err))
    }

    createSelfPerson = (data, regData) => {
        api
            .crudApi(selfUrl)
            .create(data)
            .then(response => {
                if (response.data.personId !== -1) {
                    this.getExecutorId(regData, response.data.personId);
                }
            })
            .catch(err => console.log(err))
    }

    createIndividPerson = (data, regData) => {
        api
            .crudApi(individUrl)
            .create(data)
            .then(response => {
                if (response.data.personId !== -1) {
                    this.getExecutorId(regData, response.data.personId);
                }
            })
            .catch(err => console.log(err))
    }

    getExecutorId = (regInfo, personId) => {
        
        const finalUrl = `${regUrl}/${regInfo.username}`;
        api
            .crudApi(finalUrl)
            .fetchAll()
            .then(response => {
                if (response.data) {
                    this.registration(regInfo, response.data, personId)
                }
            })
            .catch(err => console.log(err))
    }

    registration = (regInfo, execId, personId) => {
        let pr = {
            fkEmployee: execId,
            fkPerson: personId,
            fkInitNcea: regInfo.ncea,
            regDate: regInfo.regDate
        }
        api
            .crudApi(regUrl)
            .create(pr)
            .then(response => {
                alert('person added');
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Registration
                nceaInfoList={this.props.nceaInfoList}
                createEntity={this.createEntity}
                createSelfPerson={this.createSelfPerson}
                createIndividPerson={this.createIndividPerson}
            />)
    }
}

const mapStateToProps = (state) => {
    return {
        nceaInfoList: state.ncea.data,
    };
};

const mapDispatchToProps = ({
    fetchAllNceaInfo
})

export default connect(mapStateToProps, mapDispatchToProps)(Reg);