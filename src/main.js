import 'styles/app-styles.scss';

import React from 'react';
import ReactDom from 'react-dom';

import {Router} from 'react-router';
import {history} from 'react-router/lib/BrowserHistory';
import AsyncProps from 'react-router/lib/experimental/AsyncProps';

import appRoutes from 'app/routes';
import AppView from 'app/components/AppView/AppView';
import LoadingAnimation from 'app/components/LoadingAnimation/LoadingAnimation';


const appRouter = <Router
    routes={{
        renderInitialLoad: () => <LoadingAnimation />,
        component: AsyncProps,
        childRoutes: [{
            path: '/',
            component: AppView,
            childRoutes: appRoutes,
        }],
    }}
    history={history}
    createElement={AsyncProps.createElement}
/>;

const domElement = document.createElement('div');
domElement.id = 'root';
document.body.appendChild(domElement);

ReactDom.render(appRouter, domElement);

