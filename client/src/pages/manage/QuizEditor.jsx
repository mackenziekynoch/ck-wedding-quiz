import * as React from 'react';
import { TabList } from '../../components/common/tabs/TabList.jsx';

import { QuestionEditor } from './QuestionEditor.jsx';

export const QuizEditor = (props) => {

  return (
    <TabList
      role='question editor'
      orientation='vertical'
      tabList={['Quiz Questions', 'Look &amp; Feel', 'Event Details']}
      childrenList={[
        <QuestionEditor />,
        'Item Two',
        'Item Three'
      ]}
    />
  );
}