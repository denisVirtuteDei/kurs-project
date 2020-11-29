import { connect } from 'react-redux'
import { fetchAll } from '../../Redux/Actions/EntityContainerAction'
import { EntityPersons } from '../EntityPersons';

const mapStateToProps = (state) => {
    return {
        entityList: state.entityPersons.data
    }
};

const mapDispatchToProps = ({
    fetchAllEntityPersons: fetchAll
})

export default connect(mapStateToProps, mapDispatchToProps)(EntityPersons);