import React, { ReactNode } from 'react';
import { TableRow } from '@mui/material';
import { NextPage } from 'next';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { BasicTable } from '../../styled/table.styled';
import CopyClipBoardComponent from '../common/copy-clipboard';

export interface Columns {
  name: string | ReactNode;
  value: string | ReactNode;
  copy?: boolean;
}

interface Props {
  rows: Columns[];
}

const ColumnTableComponent: NextPage<Props> = ({ rows }) => {
  if (!rows) return;
  return (
    <BasicTable aria-label="Table info">
      <TableBody>
        {rows.map((col, key) => (
          <TableRow key={key}>
            <TableCell
              component="th"
              scope="row"
              align="center"
              sx={{ width: '20%' }}
            >
              {col.name}
            </TableCell>
            <TableCell
              align="left"
              sx={{
                width: '80%',
                wordBreak: 'break-all',
                whiteSpace: 'initial',
              }}
            >
              {col.value}
              {col.copy && <CopyClipBoardComponent copyText={col.value} />}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </BasicTable>
  );
};

export default ColumnTableComponent;
