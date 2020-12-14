import { connect } from 'react-redux'
import { createEntity } from '../../Redux/Actions/EntityPersonsAction'
import { fetchAllNceaInfo } from '../../Redux/Actions/NceaInfoAction'
import Registration from '../Employees/Registration';

const mapStateToProps = (state) => {
    return {
        data: state.entityPersons.data,
        person: state.entityPersons.person,
        nceaInfoList: state.ncea.data,
    };
};

const mapDispatchToProps = ({
    createEntity: createEntity,
    fetchAllNceaInfo: fetchAllNceaInfo,
})

export default connect(mapStateToProps, mapDispatchToProps)(Registration);