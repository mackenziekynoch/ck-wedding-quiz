import * as React from 'react';
import TextField from '@mui/material/TextField';

import QuestionOption from './QuestionOption.jsx';

export default function ManageQuestion() {
  const [question, setQuestion] = React.useState();
  const [description, setDescription] = React.useState();
  const [optionId, setOptionId] = React.useState(1);
  const [options, setOptions] = React.useState([{id: 0, value: 'placeholder'}]);

  const addQuestionOption = (event) => {
    const options_copy = options.slice();
    options_copy.push({id: optionId, value: 'placeholder'});
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
    let options_copy = options.slice();
    const order = event.target.id.split('-')[2];
    options_copy[order].value = event.target.value;
    setOptions(options_copy);
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
      />
      <TextField
        required
        fullWidth
        multiline
        id="description-field"
        label="Description"
        helperText="Description/answer to show after respondent makes selection"
        onChange={handleSetDescription}
      />
      {options.map((option, i) => (
        <QuestionOption
          id={i}
          key={option.id}
          includeAddButton={options.length - 1 === i ? true : false}
          includeRemoveButton={i === 0 && options.length === 1 ? false : true}
          removeQuestionOption={removeQuestionOption}
          addQuestionOption={addQuestionOption}
          updateQuestionOption={updateQuestionOption}
        />
      ))}
    </div>
  );
}
