import { Avatar, AvatarGroup, Button } from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';

export default function AvatarComp() {
  return (
    <div>
      <Button disabled variant="contained">
        My Button
      </Button>
      <AvatarGroup
        // max={2}
        spacing="medium"
        sx={
          {
            // backgroundColor: '#000',
            // '& .MuiAvatar-root': {
            //   '& svg': {
            //     fill: '#000',
            //     height: 35,
            //     width: 35,
            //   },
            //   borderColor: '#000',
            //   bgcolor: 'purple',
            //   height: 60,
            //   width: 60,
            // },
          }
        }
      >
        <Avatar
          // variant="square"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQzg2-modiBeSBIckt_NcpipPPGQfZA_dbQ&s"
          alt="avatar"
        />

        <Avatar
        // sx={{
        //   '& svg': {
        //     fill: '#000',
        //     height: 35,
        //     width: 35,
        //   },
        // }}
        >
          <AbcIcon />
        </Avatar>

        <Avatar
        // sx={{ bgcolor: 'purple', height: 60, width: 60 }}
        >
          Z
        </Avatar>
      </AvatarGroup>
    </div>
  );
}
