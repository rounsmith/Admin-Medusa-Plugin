import { Button, Container, Text } from '@medusajs/ui';
import { useNavigate } from 'react-router-dom';

import feedItems, { FeedItem } from './FeedItems';

const NewFeedsList: React.FC = () => {
  const navigate = useNavigate();

  const addNew = (feedType: string) => {
    navigate('/a/feed/feeds/newfeed/new');
    localStorage.setItem('feedType', feedType);
  };

  return (
    <div className="flex gap-4">
      <Container className="w-3/5 flex flex-wrap gap-2">
        {feedItems.map((item: FeedItem) => {
          return (
            <Button
              variant="transparent"
              onClick={() => addNew(item.title)}
              className="flex flex-col items-center gap-4"
            >
              {item.icon}
              <Text size="large" weight="plus">
                {item.title}
              </Text>
            </Button>
          );
        })}
      </Container>
      <Container className="w-2/5">Custom Feed? Please contact us.</Container>
    </div>
  );
};

export default NewFeedsList;
