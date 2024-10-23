import { memo } from 'react';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface Props {
  tabIndex: number;
  onChange: (e: React.ChangeEvent<{}>, v: number) => void;
}

function LoginTabs({ tabIndex, onChange }: Props) {
  return (
    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={tabIndex} sx={{ display: 'flex' }} onChange={onChange}>
        <Tab sx={{ flex: 1 }} label="Login" />
        <Tab sx={{ flex: 1 }} label="Register" />
      </Tabs>
    </Box>
  );
}

export default memo(LoginTabs);
