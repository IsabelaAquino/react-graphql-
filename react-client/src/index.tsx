import React from 'react';
import {createRoot} from 'react-dom/client';
import {ApolloProvider} from '@apollo/client'
import { client } from './services/apollo';

import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);
