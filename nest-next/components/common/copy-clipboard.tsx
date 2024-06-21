import React from 'react';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { IconButton } from '@mui/material';
import { ContentCopy } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Tooltip from '@mui/material/Tooltip';

interface State extends SnackbarOrigin {
  open: boolean;
}

const CopyClipBoardComponent = ({ copyText }) => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <span onClick={(e) => e.stopPropagation()}>
      <CopyToClipboard text={copyText} onCopy={handleOpen}>
        <Tooltip title={'클립보드에 복사'}>
          <IconButton size="small">
            <ContentCopy fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </CopyToClipboard>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={'클립보드에 복사가 완료되었습니다.'}
        key={vertical + horizontal}
        action={action}
        autoHideDuration={2000}
      />
    </span>
  );
};

export default CopyClipBoardComponent;
