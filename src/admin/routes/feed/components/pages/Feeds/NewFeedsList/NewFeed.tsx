import React from 'react';
import BackButton from '../../../common/BackButton';
import FeedDetails from "../../../common/FeedDetails";

const NewFeed = () => {
  const a = localStorage.getItem('feedType');
  return (
    <div className="flex flex-col gap-4">
      <BackButton />
      <div>{a}</div>
      <FeedDetails feedName='Google Shopping Feed'/>
    </div>
  );
};

export default NewFeed;
