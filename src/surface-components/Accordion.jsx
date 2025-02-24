import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const questions = [
  { question: 'Question 1', answer: 'Answer 1' },
  { question: 'Question 2', answer: 'Answer 2' },
  { question: 'Question 3', answer: 'Answer 3' },
];

export default function AccordionComp() {
  const [expanded, setExpanded] = useState({});

  const handleExpand = (question) => {
    setExpanded((prev) => {
      const isExpandedCurrent = prev[question] === true;

      if (!isExpandedCurrent) {
        return {
          [question]: !isExpandedCurrent,
        };
      }

      return {
        ...prev,
        [question]: !isExpandedCurrent,
      };
    });
  };

  return questions.map((q) => {
    return (
      <Accordion
        square
        // disabled={q.question === 'Question 1'}
        key={q.question}
        expanded={!!expanded[q.question]}
        onChange={() => handleExpand(q.question)}
        slotProps={{
          transition: { unmountOnExit: true },
        }}
        disableGutters
      >
        <AccordionSummary
          sx={{
            bgcolor: 'blue',
            '&.Mui-expanded': {
              bgcolor: 'red',
            },
          }}
          expandIcon={<ExpandMoreIcon />}
        >
          {q.question}
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h5">{q.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });
}
