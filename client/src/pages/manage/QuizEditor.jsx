import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TabList } from '../../components/common/tabs/TabList.jsx';

import { useSelector, useDispatch } from 'react-redux';
import { fetchImagesByEvent } from '../../redux/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { QuestionEditor } from './QuestionEditor.jsx';
// import { ThemeEditor } from './ThemeEditor.jsx';
import { ThemeEditor } from './ThemeEditor2.jsx';
import { EventEditor } from './EventEditor.jsx';
import { PreviewQuiz } from '../../components/manage/PreviewQuiz.jsx';

export const QuizEditor = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const eventName = useSelector(state => state.event.eventName);
  const [questionPage, setQuestionPage] = React.useState(0);

  dispatch(fetchImagesByEvent(eventName));

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