import localStyles from './Navigation.scss';
import React from 'react';
import {Link} from 'react-router';
export default class Navigation extends React.Component {

    static defaultProps = {routes: []}

    render() {
        return (
            <nav className={localStyles.this}>
                <ul>
                    {this.props.routes.map((route, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={route.path}>{route.text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}
