import { styled } from '@mui/material/styles';
import { Table } from '@mui/material';

export const BasicTable = styled(Table)(({ theme }) => ({
  [`&`]: {
    border: '1px solid rgba(224, 224, 224, 1)',
  },
  [`thead, tbody`]: {
    whiteSpace: 'nowrap',
  },
  [`th`]: {
    backgroundColor: '#f7f7f7',
    color: theme.palette.common.black,
    fontWeight: 600,
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  [`td`]: {
    borderRight: '1px solid rgba(224, 224, 224, 1)',
  },
  // [`th:first-child[rowspan] ~ th:nth-of-type(n+1)`]: {
  //   paddingTop: "10px",
  //   paddingBottom: "10px",
  // },
}));
