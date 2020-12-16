import React from 'react'
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import EmployeeMaket from '../EmployeeLayout';
import AdminMaket from '../AdminLayout';
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
                                    <EmployeeMaket {...this.props} />
                                </Route>
                                <Route path="/im/taxpayers">
                                    <TaxpayersMaket {...this.props} />
                                </Route>
                                <Route path="/im/admin">
                                    <AdminMaket {...this.props} />
                                </Route>
                            </Switch>
                        </>
                    ) : <Redirect to='/' />
                )} />
            </>
        )
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(UserCabinetContainer));