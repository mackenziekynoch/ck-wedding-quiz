import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ManageQuizFrame from './ManageQuizFrame.jsx';
import ManageQuestions from './ManageQuestions.jsx';


const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ManageQuiz() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
    >
      <Tabs value={value} onChange={handleChange} aria-label="page navigation" orientation="vertical" >
        <Tab label="Quiz Questions" {...a11yProps(0)} />
        <Tab label="Look &amp; Feel" {...a11yProps(1)} />
        <Tab label="Event Details" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <ManageQuestions />
          <ManageQuizFrame />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}