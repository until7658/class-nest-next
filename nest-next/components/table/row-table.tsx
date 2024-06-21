import React, { ReactNode } from 'react';
import { TableHead, TableRow } from '@mui/material';
import { NextPage } from 'next';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { BasicTable } from '../../styled/table.styled';

export class RowData {
  value: any[] | ReactNode[];
}

export class TheadColumns {
  name: string | ReactNode;
}

interface Props {
  cols: TheadColumns[];
  rows: RowData[];
  emptyDataText?: string;
}

const RowTableComponent: NextPage<Props> = ({ cols, rows, emptyDataText }) => {
  if (!rows) return;
  if (!emptyDataText) emptyDataText = 'No Data';
  return (
    <BasicTable aria-label="Table info">
      <TableHead>
        <TableRow>
          {cols.map((cols, key) => (
            <TableCell key={key} align="center" component="th" scope="row">
              {cols.name}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowKey) => (
          <TableRow key={rowKey}>
            {row.value.map((colValue, colKey) => (
              <TableCell
                key={colKey}
                align="center"
                sx={{
                  wordBreak: 'break-all',
                  whiteSpace: 'initial',
                }}
              >
                {colValue}
              </TableCell>
            ))}
          </TableRow>
        ))}
        {rows.length <= 0 && (
          <>
            <TableRow>
              <TableCell
                align="center"
                colSpan={cols.length}
                sx={{
                  wordBreak: 'break-all',
                  whiteSpace: 'initial',
                }}
              >
                {emptyDataText}
              </TableCell>
            </TableRow>
          </>
        )}
      </TableBody>
    </BasicTable>
  );
};

export default RowTableComponent;
