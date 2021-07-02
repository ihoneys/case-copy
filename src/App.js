import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"
import routes from "./router";

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Suspense fallback={null}>
        {
          renderRoutes(routes)
        }
      </Suspense>
    </HashRouter>
  </Provider>
)
export default memo(App)