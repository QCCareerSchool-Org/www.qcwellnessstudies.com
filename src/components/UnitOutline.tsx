import PropTypes from 'prop-types';
import React, { ReactElement, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';

type CustomToggleProps = {
  children: React.ReactNode;
  eventKey: string;
  expanded: boolean;
  onClick: () => void;
};

const CustomToggle = ({ children, eventKey, expanded, onClick }: CustomToggleProps): ReactElement => {
  const decoratedOnClick = useAccordionToggle(eventKey, onClick);
  const iconSize = 20;
  return (
    <div className="my-1 d-flex align-items-center">
      {expanded ? <IoMdRemoveCircle size={iconSize} /> : <IoMdAddCircle size={iconSize} />}
      <a className="ml-2" href="#" onClick={(e): void => { e.preventDefault(); decoratedOnClick(e); }}>{children}</a>
    </div>
  );
};

CustomToggle.propTypes = {
  children: PropTypes.node,
  eventKey: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export type OutlineData = {
  title: string;
  topics: Array<string | { title: string; topics: string[] }>;
};

type Props = {
  data: OutlineData[];
};

export const UnitOutline = ({ data }: Props): ReactElement => {
  const [ open, setOpen ] = useState<number>();
  return (
    <Accordion>
      {data.map((d, i) => (
        <Card key={i}>
          <Card.Header>
            <CustomToggle onClick={(): void => { setOpen(prev => (prev === i ? undefined : i)); }} eventKey={i.toString()} expanded={open === i}>{d.title}</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey={i.toString()}>
            <Card.Body>
              <ul className="mb-0">
                {d.topics.map((t, j) => (
                  <li key={j}>
                    {typeof t === 'string'
                      ? <>{t}</>
                      : (
                        <>
                          {t.title}
                          <ul>
                            {t.topics.map((u, k) => <li key={k}>{u}</li>)}
                          </ul>
                        </>
                      )
                    }
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

UnitOutline.propTypes = {
  data: PropTypes.array.isRequired,
};
