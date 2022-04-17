import * as React from 'react';
import Button from '@mui/material/Button';
import { TabList } from '../../components/common/tabs/TabList.jsx';

import { QuestionEditor } from './QuestionEditor.jsx';
import { ThemeEditor } from './ThemeEditor.jsx';
import { EventEditor } from './EventEditor.jsx';

export const QuizEditor = (props) => {

  return (
    <React.Fragment>
      <TabList
        role='question editor'
        orientation='vertical'
        outerSx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        tabList={['Event Details', 'Quiz Questions', 'Look & Feel']}
        childrenList={[
          <EventEditor />,
          <QuestionEditor />,
          <ThemeEditor />,
        ]}
      />
      <Button variant="contained">Save</Button>
    </React.Fragment>
  );
}