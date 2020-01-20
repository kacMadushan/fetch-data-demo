import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../api/users';

import Header from '../components/Header';
import Loading from '../components/Loading';
import UserPreview from '../components/UserPreview';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    };

    render() {
        const { users, loading } = this.props;

        let showUser = null;
        const userList = users.map((user) => <UserPreview key={user.id} {...user} />);
        showUser = loading ? <Loading /> : userList;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <Header title="Users Collection" />
                    </div>
                </div>
                <div className="row">{showUser}</div>
            </div>
        );
    }
}

App.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    users: state.usersReducer.users,
    loading: state.usersReducer.loading
});

export default connect(mapStateToProps)(App);