import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../src/css/App.css';
import Home from '../pages/Home';

const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');
        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });
    },
    uri: '/graphql'
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
          <>
            <Switch>
              <Route exact path='/' render={() => <Home />} />
            </Switch>
          </>
      </Router>
    </ApolloProvider>
  );
}

export default App;