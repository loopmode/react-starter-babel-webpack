import React from 'react';
import App from './App';

// the spinner from main.js waits until the callback is called in loadProps()
// use this as a chance to preload or prepare anything you need.
// store bindings should be done here too

export default class AppContainer extends React.Component {

    static loadProps(params, cb) {
        setTimeout(() => {
            cb(null, {
                'foo': 'bar'
            });
        }, 2500);
    }

    render() {
        const {props, state} = this;
        return <App {...props} {...state} />;
    }
}

