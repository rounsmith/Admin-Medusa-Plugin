import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@medusajs/icons';
import { Text, Button } from '@medusajs/ui';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="transparent"
      className="w-1/6 justify-start gap-4 hover:cursor-pointer"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft />
      <Text>Go Back</Text>
    </Button>
  );
};

export default BackButton;
