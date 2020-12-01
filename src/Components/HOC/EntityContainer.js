import { connect } from 'react-redux'
import { fetchAllEntityPersons } from '../../Redux/Actions/EntityPersonsAction'
import EntityPersons from '../EntityPersons';

const mapStateToProps = (state) => {
    let obj = {
        entityList: state.entityPersons.data
    }
    return obj;
};

const mapDispatchToProps = ({
    fetchAllEntityPersons: fetchAllEntityPersons
})

export default connect(mapStateToProps, mapDispatchToProps)(EntityPersons);