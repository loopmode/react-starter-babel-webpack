import 'styles/app-styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {Router} from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';
import AsyncProps from 'react-router/lib/experimental/AsyncProps';

import SpinnerOverlay from 'app/components/Spinner/SpinnerOverlay';

import AppLoader from 'app/components/App/AppLoader';
import AppRoutes from 'app/routes';


function main() {
    const AppRouter = <Router
        routes={{
            renderInitialLoad: () => <SpinnerOverlay />,
            component: AsyncProps,
            childRoutes: [{
                path: '/',
                component: AppLoader,
                childRoutes: AppRoutes,
            }],
        }}
        history={history}
        createElement={AsyncProps.createElement}
    />;

    const domElement = document.createElement('div');
    domElement.id = 'root';
    document.body.appendChild(domElement);

    ReactDom.render(AppRouter, domElement);
}

main();
