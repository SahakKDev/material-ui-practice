import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useState } from 'react';

export default function BottomNavigationComp() {
  const [value, setValue] = useState('balance');

  const handleChange = function (e, newValue) {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        position: 'fixed',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
        '& button:not(.Mui-selected)': {
          color: 'green',
        },
      }}
      showLabels
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        value="balance"
        label="Balance"
        icon={<AccountBalanceIcon />}
      />
      <BottomNavigationAction
        value="account"
        label="Account"
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction
        value="card"
        label="Card"
        icon={<AddCardIcon />}
      />
      <BottomNavigationAction
        value="location"
        label="Location"
        icon={<AddLocationIcon />}
      />
      <BottomNavigationAction
        value="phone"
        label="Phone"
        icon={<AddIcCallIcon />}
      />
    </BottomNavigation>
  );
}
