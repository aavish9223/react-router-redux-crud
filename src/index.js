import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import promise from 'redux-promise';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/posts/new" component={PostsNew}></Route>
        <Route path="/posts/:id" component={PostShow}></Route>
        <Route path="/" component={PostsIndex}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container')
);
