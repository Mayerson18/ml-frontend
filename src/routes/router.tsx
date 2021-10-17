import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from '../components/Loading';

const SearchBoxView = lazy(() => import('../views/SearchBoxView'));
const SearchResultsView = lazy(() => import('../views/SearchResultsView'));
const DetailItemView = lazy(() => import('../views/DetailItemView'));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={SearchBoxView}/>
        <Route exact path="/items" component={SearchResultsView}/>
        <Route exact path="/items/:id" component={DetailItemView}/>
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;