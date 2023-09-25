import React from 'react';
import { Text } from '@medusajs/ui';
import { useNavigate } from 'react-router-dom';

import AddButton from '../components/common/AddButton';

const Feeds: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-100 gap-10 h-full items-center justify-center">
      <div className="flex flex-col items-center">
        <Text>Welcome to Feeds</Text>
        <Text>Click below to create your first feed</Text>
      </div>
      <AddButton
        title="Create Feed"
        onClick={() => navigate('/a/feed/feeds/newfeed')}
      />
    </div>
  );
};

export default Feeds;
