import * as React from 'react';
import { TabList } from '../../components/common/tabs/TabList.jsx';

import { QuestionEditor } from './QuestionEditor.jsx';
import { ThemeEditor } from './ThemeEditor.jsx';
import { EventEditor } from './EventEditor.jsx';

export const QuizEditor = (props) => {

  return (
    <TabList
      role='question editor'
      orientation='vertical'
      outerSx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
      tabList={['Quiz Questions', 'Look & Feel', 'Event Details']}
      childrenList={[
        <QuestionEditor />,
        <ThemeEditor />,
        <EventEditor />,
      ]}
    />
  );
}