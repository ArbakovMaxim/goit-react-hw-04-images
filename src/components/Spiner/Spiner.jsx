import { Rings } from 'react-loader-spinner';
import { WraperSpiner } from './Spiner.styled';

export const Spiner = () => {
  return (
    <WraperSpiner>
      <Rings color="#00BFFF" height={600} width={600} />
    </WraperSpiner>
  );
};
