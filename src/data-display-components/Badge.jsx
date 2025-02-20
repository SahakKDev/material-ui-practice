import { Avatar, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function BadgeComp() {
  return (
    <Badge
      color="secondary"
      badgeContent={5} // <AddIcon />
      max={4}
      // showZero
      // invisible
      // variant="dot"
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
      }}
      sx={{
        '& .MuiBadge-badge': {
          background: 'green',
          borderRadius: 3,
          fontFamily: 'Verdana',
          fontSize: '1rem',
          marginRight: '0.75rem',
          color: 'red',
        },
      }}
    >
      <Avatar
        alt="user"

        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQzg2-modiBeSBIckt_NcpipPPGQfZA_dbQ&s"
      ></Avatar>
    </Badge>
  );
}
