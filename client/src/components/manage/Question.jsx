import * as React from 'react';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { updateQuestion } from '../../redux/store.js';
import TextField from '@mui/material/TextField';

import { QuestionOption } from './QuestionOption.jsx';

export const Question = ({quizQuestion}) => {
  const dispatch = useDispatch();
  const [question, setQuestion] = React.useState(quizQuestion.question);
  const [description, setDescription] = React.useState(quizQuestion.description);
  const [optionId, setOptionId] = React.useState(quizQuestion.answerOptions.length);
  const [options, setOptions] = React.useState(quizQuestion.answerOptions);
  const [answer, setAnswer] = React.useState(quizQuestion.answer);

  React.useEffect(() => {
    dispatch(updateQuestion({
      id: quizQuestion.id,
      question: question,
      description: description,
      answerOptions: options,
      answer: answer
    }));
  }, [options, question, description, answer]);

  const addQuestionOption = (event) => {
    const options_copy = options.slice();
    options_copy.push({id: optionId, text: 'placeholder'});
    setOptions(options_copy);
    setOptionId(optionId + 1);
  };

  const removeQuestionOption = (event) => {
    if (options.length === 1) {
      return;
    }
    let options_copy = options.slice();
    const id = event.target.parentElement.id;
    if (id !== undefined && id !== null) {
      options_copy.splice(id, 1);
      setOptions(options_copy);
    }
  };

  const updateQuestionOption = (event) => {
    let options_copy = _.cloneDeep(options);
    const order = event.target.id.split('-')[2];
    options_copy[order].text = event.target.value;
    setOptions(options_copy);
  };

  const updateQuestionAnswer = (event) => {
    const id = parseInt(event.target.parentElement.id, 10);
    if (id !== undefined && id !== null && !isNaN(id)) {
      setAnswer(id + 1);
    }
  };

  const handleSetQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleSetDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <TextField
        required
        fullWidth
        id="question-field"
        label="Question"
        onChange={handleSetQuestion}
        defaultValue={question}
      />
      <TextField
        required
        fullWidth
        multiline
        id="description-field"
        label="Description"
        helperText="Description/answer to show after respondent makes selection"
        onChange={handleSetDescription}
        defaultValue={description}
      />
      {options.map((option, i) => (
        <QuestionOption
          id={i}
          key={option.id}
          isAnswer={option.id === answer}
          includeAddButton={options.length - 1 === i ? true : false}
          includeRemoveButton={i === 0 && options.length === 1 ? false : true}
          removeQuestionOption={removeQuestionOption}
          addQuestionOption={addQuestionOption}
          updateQuestionOption={updateQuestionOption}
          updateQuestionAnswer={updateQuestionAnswer}
          value={option.text}
        />
      ))}
    </div>
  );
}
