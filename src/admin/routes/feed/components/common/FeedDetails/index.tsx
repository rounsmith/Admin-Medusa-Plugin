import { useState } from 'react';
import { Text, Select, Input,Button } from '@medusajs/ui';

interface FeedDetailsProps {
  feedName: string;
}

const FeedDetails: React.FC<FeedDetailsProps> = ({ feedName }) => {
  const [value, setValue] = useState<string | undefined>('active');
  const [inputFeedName, setInputFeedName] = useState<string>(feedName);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <div className="flex flex-col  gap-4">
        <div className="flex flex-col gap-2">
          <Text>Feed Name</Text>
          <Input
            type="text"
            placeholder="Enter feed name"
            value={inputFeedName}
            onChange={(e) => setInputFeedName(e.target.value)}
          />
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
        <Button
          variant="primary"
          className="justify-start gap-4 hover:cursor-pointer w-fit"
          onClick={() => console.log("yes")}
        >
          <Text>Save</Text>
        </Button>
      </div>
    </div>
  );
};

export default FeedDetails;
