import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListSubheader,
  Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';

export default function ListComp() {
  return (
    <Box
      sx={{
        width: 350,
        bgcolor: '#121212',
        '& .MuiListSubheader-root': {
          bgcolor: '#121212',
          color: '#fff',
        },
        '& .MuiTypography-root': {
          color: '#fff',
        },
        '& .MuiListItemText-secondary': {
          fontSize: '6px',
        },
        '& svg': {
          fill: '#fff',
          fontSize: 40,
        },
      }}
    >
      <List subheader={<ListSubheader>My List</ListSubheader>}>
        <ListItem
          // disableGutters
          disablePadding
          divider
          secondaryAction={
            <IconButton onClick={() => console.log('Clicked secondary')}>
              <AddIcon />
            </IconButton>
          }
        >
          <ListItemButton onClick={() => console.log('Clicked')}>
            <ListItemText inset primary="Inbox" secondary={'secondary text'} />
          </ListItemButton>
        </ListItem>
        <ListItem divider disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItemButton>
        </ListItem>
        <ListSubheader>Avatar Section</ListSubheader>
        <ListItem divider>
          <ListItemAvatar>
            <Avatar>Z</Avatar>
          </ListItemAvatar>
          <ListItemText primary="My Avatar" />
        </ListItem>
      </List>
    </Box>
  );
}
