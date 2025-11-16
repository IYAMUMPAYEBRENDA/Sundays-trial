import React, { createContext, useContext, useState } from 'react';

const AccordionContext = createContext();

function Accordion({ children }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AccordionContext.Provider value={{ openIndex, setOpenIndex }}>
      <div className="accordion">{children}</div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({ index, children }) {
  const { openIndex, setOpenIndex } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  return (
    <div className="accordion-item">
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setOpenIndex, index })
      )}
    </div>
  );
}

function AccordionHeader({ children, isOpen, setOpenIndex, index }) {
  return (
    <h3 
      className="accordion-header"
      onClick={() => setOpenIndex(isOpen ? null : index)}
    >
      {children}
      <span>{isOpen ? '▼' : '►'}</span>
    </h3>
  );
}

function AccordionContent({ children, isOpen }) {
  return isOpen ? (
    <div className="accordion-content">{children}</div>
  ) : null;
}
