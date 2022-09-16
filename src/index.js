import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.min.css';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
    </Router>
);
