import React, { useState, useRef } from 'react';
import './SAccordionMenu.scss';

interface SAccordionMenuProps {
  title: string;
  titleBold?: boolean;
  children?: React.ReactNode;
}

export const SAccordionMenu: React.FC<SAccordionMenuProps> = ({
  title,
  titleBold = false,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [accordionHeight, setAccordionHeight] = useState('0px');
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    if (!accordionRef.current) return;

    if (isActive) {
      setAccordionHeight(`${accordionRef.current.scrollHeight}px`);
      requestAnimationFrame(() => {
        setAccordionHeight('0px');
        setIsActive(false);
      });
    } else {
      setAccordionHeight(`${accordionRef.current.scrollHeight}px`);
      setIsActive(true);
    }
  };

  const onTransitionEnd = () => {
    if (isActive) {
      setAccordionHeight('auto');
    }
  };

  return (
    <div className="s-accordion-wrapper">
      <div className={`title ${titleBold ? 'title-bold' : ''}`}>
        {title}
        <i
          className={`mdi ${isActive ? 'mdi-chevron-down' : 'mdi-chevron-right'} s-accordion-icon`}
          onClick={toggleAccordion}
        />
      </div>
      <div
        ref={accordionRef}
        className="s-accordion-contents"
        style={{ height: accordionHeight }}
        onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
    </div>
  );
};

export default SAccordionMenu;
