import { FC } from 'react';
import { Button } from '@mui/material';

const Home: FC = () => {
  return (
    <>
      <h1>Nest with Nest</h1>
      <Button
        variant="contained"
        onClick={() => {
          console.log('button click');
        }}
      >
        Contained
      </Button>
    </>
  );
};

export default Home;
