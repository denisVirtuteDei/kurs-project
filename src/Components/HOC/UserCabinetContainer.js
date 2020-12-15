import React from 'react'
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import EmployeeMaket from '../EmployeeMaket';
import { TaxpayersMaket } from '../TaxpayersMaket';

class UserCabinetContainer extends React.Component {

    render() {
        return (
            <>
                <Switch>
                    <Route path="/im/employees">
                        <EmployeeMaket {...this.props}/>
                    </Route>
                    <Route path="/im/taxpayers">
                        <TaxpayersMaket {...this.props}/>
                    </Route>
                </Switch>
            </>
        )
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(withRouter(UserCabinetContainer));