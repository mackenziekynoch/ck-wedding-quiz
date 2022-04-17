import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { TabPanel, a11yProps } from './TabPanel.jsx';


export const TabList = (props) => {
  const { role, orientation, tabList, childrenList, ...other } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={other?.outerSx}>
      <Box sx={other?.tabSx}>
        <Tabs value={value} onChange={handleChange} aria-label={`${role} page navigation`} orientation={orientation} >
          {tabList.map((tab, i) => (
            <Tab
              key={tab}
              label={tab}
              {...a11yProps(tab, i)}
            />
          ))}
        </Tabs>
      </Box>
      {childrenList.map((children, i) => (
        <TabPanel key={i} value={value} index={i}>
          { children }
        </TabPanel>
      ))}
    </Box>
  );
};