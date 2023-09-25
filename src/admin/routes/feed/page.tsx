import React from 'react';
import { RouteConfig } from '@medusajs/admin';
import { Route, Routes } from 'react-router-dom';

import FeedTable from './components/Table';
import FeedJsonView from './components/FeedJsonView';
import FeedXmlView from './components/FeedXmlView';

import Home from './pages/Home';
import Layout from './components/Layout';
import Feeds from './pages/Feeds';
import Filters from './pages/Filters';
import NewFeedsList from './components/pages/Feeds/NewFeedsList/NewFeedsList';
import NewFeed from './components/pages/Feeds/NewFeedsList/NewFeed';

const FeedPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Feeds />} />
        <Route path="feeds">
          <Route index element={<Feeds />} />
          <Route path="newfeed">
            <Route index element={<NewFeedsList />} />
            <Route path="new" element={<NewFeed />} />
          </Route>
        </Route>
        <Route path="filters" element={<Filters />} />
      </Route>
    </Routes>
  );
};

export const config: RouteConfig = {
  link: {
    label: 'Product Feed',
  },
};
export default FeedPage;
