import React from 'react';
import BackButton from '../../../common/BackButton';
import FeedDetails from "../../../common/FeedDetails";

const NewFeed = () => {
  const feedName= localStorage.getItem('feedType');
  
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      {feedName}
      <FeedDetails feedName={feedName}/>
    </div>
  );
};

export default NewFeed;
