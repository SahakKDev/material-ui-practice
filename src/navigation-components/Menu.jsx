import {
  Button,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
  Zoom,
} from '@mui/material';
import ContentCut from '@mui/icons-material/ContentCut';
import { useState } from 'react';

const text = ` Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem animi quia aut, unde, illo illum asperiores
            necessitatibus obcaecati quibusdam possimus ad nostrum recusandae
            architecto modi nulla esse quo fugit ipsa rem adipisci iure
            doloremque! In id distinctio obcaecati ratione nulla, qui
            architecto? Delectus ea facere, laboriosam et qui debitis fugit?`;

export default function MenuComp() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (option) => {
    setSelected((prev) => (prev === option ? null : option));
    handleClose();
  };

  return (
    <div>
      {' '}
      <Button variant="contained" onClick={handleClick}>
        Dashboard
      </Button>
      <Menu
        TransitionComponent={Zoom}
        // anchorOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'right',
        // }}
        slotProps={{
          paper: {
            sx: {
              width: '500px',
              maxHeight: 100,
              bgcolor: 'green',
              '& .MuiMenuItem-root': {
                color: 'red',
              },
              '& .Mui-selected': {
                bgcolor: 'pink',
                '&:hover': {
                  bgcolor: 'pink',
                },
              },
              '& .MuiTypography-root, .MuiMenuItem-root': {
                fontSize: '2rem',
              },
            },
          },
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => handleSelect('first')}
          selected={selected === 'first'}
        >
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem
          selected={selected === 'second'}
          onClick={() => handleSelect('second')}
        >
          My account
        </MenuItem>
        <MenuItem
          selected={selected === 'third'}
          onClick={() => handleSelect('third')}

          // disabled
        >
          <Typography
            noWrap
            // onMouseEnter={(e) => {
            //   console.log(e.target.scrollWidth > e.target.clientWidth);
            // }}
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem animi quia aut, unde, illo illum asperiores
            necessitatibus obcaecati quibusdam possimus ad nostrum recusandae
            architecto modi nulla esse quo fugit ipsa rem adipisci iure
            doloremque! In id distinctio obcaecati ratione nulla, qui
            architecto? Delectus ea facere, laboriosam et qui debitis fugit?"
          >
            {text}
          </Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}
