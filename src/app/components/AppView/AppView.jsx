import localStyles from './AppView.scss';
import cx from 'classnames';

import React from 'react';

import routes from 'app/routes';

import Navigation from 'app/components/Navigation/Navigation';
import StartPage from 'app/pages/StartPage/StartPage';

export default class AppView extends React.Component {

    static loadProps(params, cb) {
        // get some stuff loaded if you like, then invoke callback
        setTimeout(() => {
            cb(null, {});
        }, 3000);
    }

    render() {
        return <div className={cx('app', localStyles.this)}>
            <header>
                <Navigation routes={routes} />
            </header>
            <main>
                {this.props.children || <StartPage />}
            </main>
            <footer>
                <Navigation routes={routes} />
            </footer>
        </div>;
    }
}

