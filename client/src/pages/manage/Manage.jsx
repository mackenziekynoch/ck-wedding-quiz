import * as React from 'react';
import Box from '@mui/material/Box';

import { QuizEditor } from './QuizEditor.jsx';
import { TabList } from '../../components/common/tabs/TabList.jsx';


export const Manage = (props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <TabList
        role='manage console'
        orientation='horizontal'
        tabSx={{ borderBottom: 1, borderColor: 'divider' }}
        tabList={['Quiz', 'Event', 'Profile']}
        childrenList={[
          <QuizEditor />,
          "Item Two",
          "Item Three"
        ]}
      />
    </Box>
  );
}