import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDealComp() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        // '& svg': {
        //   transform: 'none !important',
        //   WebkitTransform: 'none !important',
        // },
      }}
      FabProps={{
        sx: {
          color: 'red',
          bgcolor: 'green',
          ':hover': {
            bgcolor: 'purple',
          },
        },
      }}
      direction="left"
      icon={<SpeedDialIcon />}
      // open
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          sx={{
            bgcolor: 'blue',
          }}
        />
      ))}
    </SpeedDial>
  );
}
