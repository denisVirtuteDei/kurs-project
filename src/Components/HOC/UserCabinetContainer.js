import React from 'react'
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import EmployeeLayout from '../EmployeeLayout';
import AdminLayout from '../AdminLayout';
import { TaxpayersMaket } from '../TaxpayersLayout';

class UserCabinetContainer extends React.Component {

    render() {
        return (
            <>
                <Route {...this.props} render={(props) => (
                    window.sessionStorage.getItem('access_token') ? (
                        <>
                            <Switch>
                                <Route path="/im/employees">
                                    <EmployeeLayout {...this.props} />
                                </Route>
                                <Route path="/im/taxpayers">
                                    <TaxpayersMaket {...this.props} />
                                </Route>
                                <Route path="/im/admin">
                                    <AdminLayout {...this.props} />
                                </Route>
                            </Switch>
                        </>
                    ) : <Redirect to='/' />
                )} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {})(withRouter(UserCabinetContainer));