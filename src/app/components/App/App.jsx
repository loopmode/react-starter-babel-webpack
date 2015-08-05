import localStyles from './App.scss';
import cx from 'classnames';
import React from 'react';

import Navigation from 'app/components/Navigation/Navigation';
import StartPage from 'app/pages/StartPage/StartPage';

export default class App extends React.Component {

    render() {
        return <div className={cx('app', localStyles.this)}>
            <header>
                <Navigation routes={this.props.routes} />
            </header>
            <main>
                {this.props.children || <StartPage />}
            </main>
            <footer>
                <Navigation routes={this.props.routes} />
            </footer>
        </div>;
    }
}

