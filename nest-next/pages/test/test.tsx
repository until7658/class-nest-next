import { FC } from 'react';
import { Button } from '@mui/material';
import ColumnTableComponent from '../../components/table/column-table';
import RowTableComponent from '../../components/table/row-table';

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
      <ColumnTableComponent
        rows={[
          { name: 'Column1', value: 'Value1' },
          { name: 'Column2', value: 'Value2' },
          { name: 'Column3', value: 'Value3' },
          { name: 'Column4', value: 'Value4' },
          { name: 'Column5', value: 'Value5' },
        ]}
      />
      <hr />
      <RowTableComponent
        cols={[
          { name: 'Column1' },
          { name: 'Column2' },
          { name: 'Column3' },
          { name: 'Column4' },
          { name: 'Column5' },
        ]}
        rows={[
          {
            value: [
              'Row1-Value1',
              'Row1-Value2',
              'Row1-Value3',
              'Row1-Value4',
              'Row1-Value5',
            ],
          },
          {
            value: [
              'Row2-Value1',
              'Row2-Value2',
              'Row2-Value3',
              'Row2-Value4',
              'Row2-Value5',
            ],
          },
        ]}
      />
    </>
  );
};

export default Home;
