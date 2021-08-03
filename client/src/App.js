import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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

  const [headerLinks] = useState([
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Menu',
      url: '/menu'
    },
    {
      name: 'DIY',
      url: '/diy'
    },
    {
      name: 'FAQ',
      url: '/faq'
    }
  ])

  const [currentHeaderLink, setHeaderLink] = useState(headerLinks[0])

  return (
    <ApolloProvider client={client}>
      <Router>
          <div className="content">
            <Header 
              headerLinks={headerLinks}
              setHeaderLink={setHeaderLink}
              currentHeaderLink={currentHeaderLink}
              />
              <div className="body">
                <Switch>
                  <Route exact path='/' render={() => <Home />} />
                </Switch>
              </div>
            <Footer />
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;