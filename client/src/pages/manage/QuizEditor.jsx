import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TabList } from '../../components/common/tabs/TabList.jsx';

import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { QuestionEditor } from './QuestionEditor.jsx';
import { ThemeEditor } from './ThemeEditor.jsx';
import { EventEditor } from './EventEditor.jsx';
import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';

export const QuizEditor = () => {
  const theme = useSelector(state => state.theme.theme);
  const [questionPage, setQuestionPage] = React.useState(0);

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TabList
            role='question editor'
            orientation='vertical'
            outerSx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
            tabList={['Event Details', 'Quiz Questions', 'Look & Feel']}
            childrenList={[
              <EventEditor />,
              <QuestionEditor setQuestionPage={setQuestionPage} />,
              <ThemeEditor setQuestionPage={setQuestionPage} />,
            ]}
          />
        </Grid>
        <Grid item xs={4}>
          <ThemeProvider theme={createTheme(theme)}>
            <PreviewQuiz questionPage={questionPage} editMode={true} />
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
}