import * as React from 'react';

import { TooltipIconButton } from './TooltipIconButton.jsx';

export const StatusToggleButton = (props) => {
  const { condition, title, onChangeHandler, posIcon, negIcon, ...other } = props;

  return (
    <TooltipIconButton
      title={title}
      onClickHandler={onChangeHandler}
      icon={condition ? posIcon : negIcon}
      {...other}
    />
  );
}
