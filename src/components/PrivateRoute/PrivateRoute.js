import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    return (
        <>
            {
                isLoading ? <Spinner className="d-block mx-auto" animation="border" variant="danger" /> :
                    <Route
                        {...rest}
                        render={({ location }) =>
                            user?.email ? (
                                children
                            ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: location }
                                    }}
                                />
                            )
                        }
                    />
            }
        </>
    );
};

export default PrivateRoute;