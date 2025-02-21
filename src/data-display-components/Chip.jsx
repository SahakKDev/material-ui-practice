import { Chip, Avatar } from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function ChipComp() {
  const [chips, setChips] = useState([
    'First Chip',
    'Second Chip',
    'Third Chip',
  ]);

  function handleDelete(chip) {
    setChips((prev) => prev.filter((p) => p !== chip));
  }

  return (
    <div>
      {chips.map((chip) => {
        return (
          <Chip
            deleteIcon={<DeleteIcon />}
            // icon={<RemoveCircleOutlineIcon />}
            key={chip}
            label={chip}
            color="primary"
            onDelete={() => handleDelete(chip)}
            sx={{
              bgcolor: 'green',
              color: '#fff',
              '& .MuiChip-avatarMedium': {
                bgcolor: 'red',
              },
              '& .MuiChip-deleteIcon': {
                color: 'black',
                '&:hover': {
                  color: 'red',
                },
              },
            }}
            avatar={<Avatar sx={{ bgcolor: 'purple' }}>Z</Avatar>}
          />
        );
      })}
    </div>
  );
}
