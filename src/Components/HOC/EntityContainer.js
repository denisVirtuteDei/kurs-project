import { connect } from 'react-redux'
import { fetchAllEntityPersons } from '../../Redux/Actions/EntityPersonsAction'
import EntityPersons from '../EntityPersons';

const mapStateToProps = (state) => {
    return {
        entityList: state.entityPersons.data
    };
};

const mapDispatchToProps = ({
    fetchAllEntityPersons: fetchAllEntityPersons
})

export default connect(mapStateToProps, mapDispatchToProps)(EntityPersons);