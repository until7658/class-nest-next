import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';

const Compo = (pros: { text: string }) => {
  const { text } = pros;
  return (
    <>
      <h1>{text}</h1>
    </>
  );
};

const Home: FC = () => {
  const [text, setText] = useState<string>('');

  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');

  useEffect(() => {
    setText('test');
    console.log('useEffect');
  }, [text]);

  return (
    <>
      <h1>Nest with Nest</h1>
      <h2>{text}</h2>
      <Compo text={'compo compo2222'} />
      <Button
        variant="contained"
        color="error"
        onClick={() => {
          console.log('click');
          setText('click');
        }}
      >
        test
      </Button>
    </>
  );
};

export default Home;
