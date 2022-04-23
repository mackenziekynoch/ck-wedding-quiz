import * as React from 'react';
import _ from 'lodash';
import uuid from 'react-uuid'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuestion } from '../../redux/store.js';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';

import { ModifiableInputList } from '../common/fields/ModifiableInputList.jsx';
import { StatusToggleButton } from '../common/buttons/StatusToggleButton.jsx';

export const Question = ({quizQuestion}) => {
  const dispatch = useDispatch();
  const [question, setQuestion] = React.useState(quizQuestion.question);
  const [description, setDescription] = React.useState(quizQuestion.description);
  const [options, setOptions] = React.useState(quizQuestion.answerOptions);
  const [answer, setAnswer] = React.useState(quizQuestion.answer);
  const [image, setImage] = React.useState(null);
  const images = useSelector(state => state.assets.images);

  React.useEffect(() => {
    dispatch(updateQuestion({
      id: quizQuestion.id,
      question: question,
      description: description,
      answerOptions: options,
      answer: answer
    }));
  }, [options, question, description, answer]);

  const addQuestionOption = () => {
    const newOption = {id: uuid(), value: 'placeholder'};
    setOptions([...options, newOption]);
  };

  const removeQuestionOption = (event) => {
    if (options.length === 1) {
      return;
    }
    setOptions((arr) => arr.filter(option => event.target.parentElement.id !== option.id));
  };

  const updateQuestionOption = (event) => {
    setOptions((arr) => arr.map(option => {
      if (option.id === event.target.id) {
        let newOption = Object.assign({}, option);
        newOption.value = event.target.value;
        return newOption;
      } else {
        return option;
      }
    }));
  };

  const updateQuestionAnswer = (event) => {
    const targetId = event.target.parentElement.id;
    if (targetId !== undefined && targetId !== null && targetId !== '') {
      setAnswer(targetId);
    }
  };

  const handleSetQuestion = (event) => {
    setQuestion(event.target.value);
  };

  const handleSetDescription = (event) => {
    setDescription(event.target.value);
  };

  const correctAnswerRender = (option) => {
    return (
      <StatusToggleButton
        key={`correct-answer-button-${option.id}`}
        title='Correct answer'
        id={option.id}
        condition={option.id === answer}
        onChangeHandler={updateQuestionAnswer}
        posIcon={<CheckCircleRoundedIcon color="success" id={option.id} />}
        negIcon={<CheckCircleOutlineRoundedIcon color="default" id={option.id} />}
      />
    );
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
      {images.length > 0 &&
        <Select>
          {images.map(image => {
            <MenuItem key={image}>{image}</MenuItem>
          })}
        </Select>
      }
      <ModifiableInputList
        role='Answer'
        width='50ch'
        onChangeHandler={updateQuestionOption}
        onRemoveHandler={removeQuestionOption}
        onAddHandler={addQuestionOption}
        inputs={options}
        buttonRenderList={[correctAnswerRender]}
      />
    </div>
  );
};
