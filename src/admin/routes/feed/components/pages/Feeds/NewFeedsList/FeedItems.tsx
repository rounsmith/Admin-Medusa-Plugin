import { Funnel } from '@medusajs/icons';

import RssIcon from '../../../icons/RssIcon';
import GoogleShoppingIcon from '../../../icons/GoogleShoppingIcon';
import FacebookShopping from '../../../icons/FacebookShoppingIcon';

export interface FeedItem {
  title: string;
  icon: JSX.Element;
  feedType: string;
}

const FeedItems: FeedItem[] = [
  {
    title: 'Google Shopping Feed',
    icon: <GoogleShoppingIcon />,
    feedType: 'google',
  },
  {
    title: 'Facebook Feed',
    icon: <FacebookShopping />,
    feedType: 'facebook',
  },
];

export default FeedItems;
