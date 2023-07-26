import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>      <Accordion  expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        
    <AccordionSummary
      sx={{boxShadow:"0px 0px 70px 0px rgba(138, 138, 138, 0.10) "}}
      aria-controls="panel11bh-content"
      id="panel11bh-header"
    >
      <Typography sx={{ width: '60%', flexShrink: 0 }}>
      Как купить на виртуальный адрес?
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}></Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion  expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
        
        <AccordionSummary
          sx={{boxShadow:"0px 0px 70px 0px rgba(138, 138, 138, 0.10) "}}
          aria-controls="panel22bh-content"
          id="panel22bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0 }}>
          Сколько стоит виртуальный адрес?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel33'} onChange={handleChange('panel33')}>
        
        <AccordionSummary
          sx={{boxShadow:"0px 0px 70px 0px rgba(138, 138, 138, 0.10) "}}
          aria-controls="panel33bh-content"
          id="panel33bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0 }}>
          Как купить на виртуальный адрес?
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        
        <AccordionSummary
          sx={{boxShadow:"0px 0px 70px 0px rgba(138, 138, 138, 0.10) "}}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0 }}>
          Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?

          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0 }}>Как я узнаю что заказ пришел на склад?</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0 }}>
          Покупки на Eбeй / Ebay
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
           
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '60%', flexShrink: 0 }}>Что делать после того, как я выкупил заказ самостоятельно на ваш адресс?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
        
      </Accordion>
    </div>
  );
}