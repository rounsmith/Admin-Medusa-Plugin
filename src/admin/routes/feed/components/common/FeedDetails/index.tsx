import { useState } from 'react';
import { Text, Select, Input } from '@medusajs/ui';

interface FeedDetailsProps {
  feedName: string;
}

const FeedDetails: React.FC<FeedDetailsProps> = ({ feedName }) => {
  const [value, setValue] = useState<string | undefined>('active');

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <Text>Fee Name</Text>
          <Input type="text" placeholder="Enter feed name" value={feedName} />
        </div>
        <div className="flex flex-col gap-2">
          <Text>Status</Text>
          <Select onValueChange={handleChange} value={value}>
            <Select.Trigger>
              <Select.Value placeholder="Select Status" />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="active">Active</Select.Item>
              <Select.Item value="disabled">Disabled</Select.Item>
            </Select.Content>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FeedDetails;
