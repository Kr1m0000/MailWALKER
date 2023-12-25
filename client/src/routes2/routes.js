import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../components/emails/Emails'));
const ViewEmail = lazy(() => import('../components/emails/ViewEmail'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

export { routes };