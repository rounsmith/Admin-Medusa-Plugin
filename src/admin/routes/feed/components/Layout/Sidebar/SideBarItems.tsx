import RssIcon from '../../icons/RssIcon';
import { Funnel } from '@medusajs/icons';

interface Item {
  link: string;
  title: string;
  icon: JSX.Element;
}

const SideBarItems: Item[] = [
  { link: '/a/feed/feeds', title: 'Feeds', icon: <RssIcon /> },
  { link: '/a/feed/filters', title: 'Filters', icon: <Funnel /> },
];

export default SideBarItems;
