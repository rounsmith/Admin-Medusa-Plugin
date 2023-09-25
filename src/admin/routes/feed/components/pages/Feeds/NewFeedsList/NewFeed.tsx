import React from 'react';
import BackButton from '../../../common/BackButton';

const NewFeed = () => {
  const a = localStorage.getItem('feedType');
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      <div>{a}</div>
    </div>
  );
};

export default NewFeed;
