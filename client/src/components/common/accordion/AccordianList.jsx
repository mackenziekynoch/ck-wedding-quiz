import * as React from 'react';

import { FullAccordion } from './FullAccordion.jsx';


export const AccordianList = (props) => {
  const { items, onOpenPanel, ...other } = props;
  const [ expanded, setExpanded ] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    onOpenPanel(panel);
  };

  return (
    <div>
      {items.map(({id, title, children, ...other}) => (
        <FullAccordion
          id={id}
          key={id}
          title={title}
          showRemove={other?.showRemove}
          removeHandler={other?.removeHandler}
          children={children}
          handleChange={handleChange(id)}
          expanded={expanded === id}
        />
      ))}
    </div>
  );
}

