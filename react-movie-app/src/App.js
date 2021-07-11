import React from 'react';
import { Layout } from 'antd';
import {
  BrowserRouter as Router, Switch, Route, HashRouter
} from 'react-router-dom';

import { Footer, MenuTop } from './components';
import { Popular, Search, Movie, Error404, UpComingMovies, TopRatedMovies } from './pages';

function App() {

  const { Header, Content } = Layout;

  return (
    <Layout>
      <HashRouter  basename={process.env.PUBLIC_URL}>
        <Header style={ { zIndex: 2 } }>
          <MenuTop/>
        </Header>
        <Content>
          <Switch>
           <Route path="/" exact={ true }>
              <Popular/>
            </Route>
            <Route path="/top-rated" exact={ true }>
              <TopRatedMovies/>
            </Route>
            <Route path="/upcoming" exact={ true }>
              <UpComingMovies/>
            </Route>
            <Route path="/search" exact={ true }>
              <Search/>
            </Route>
            <Route path="/movie/:id" exact={ true }>
              <Movie/>
            </Route>
            <Route path="*">
              <Error404/>
            </Route>
          </Switch>
        </Content>
        <Footer/>
      </HashRouter>
    </Layout>
  );
}

export default App;
