import { PlusMini } from '@medusajs/icons';
import { Button, Text } from '@medusajs/ui';

interface AddButtonProps {
  title?: string;
  onClick(): void;
}

const AddButton: React.FC<AddButtonProps> = ({ title, onClick }) => {
  return (
    <Button onClick={onClick} variant="primary" className="flex items-center">
      <PlusMini />
      <Text>{title}</Text>
    </Button>
  );
};

export default AddButton;
