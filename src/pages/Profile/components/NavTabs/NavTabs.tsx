import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';

import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { TABS_LIST } from './constants';

function NavTabs() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (_event: SyntheticEvent, value: number) => {
    setCurrentTab(value);
  };

  useEffect(() => {
    const currentTab = TABS_LIST.find((tab) => tab.to === location.pathname);
    const currentIndex = currentTab ? TABS_LIST.indexOf(currentTab) : 0;

    setCurrentTab(currentIndex);
  }, []);

  return (
    <Box>
      <Tabs value={currentTab} onChange={handleTabChange}>
        {TABS_LIST.map((tab) => (
          <Tab
            key={tab.label}
            component={RouterLink}
            label={tab.label}
            to={tab.to}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default NavTabs;
