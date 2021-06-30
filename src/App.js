import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from "./router";

export default memo(function App() {
  return (
    <>
      <Suspense fallback={null}>
        {
          renderRoutes(routes)
        }
      </Suspense>
    </>
  );
})