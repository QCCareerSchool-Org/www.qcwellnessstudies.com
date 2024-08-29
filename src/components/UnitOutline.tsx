import type { FC } from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Card from 'react-bootstrap/Card';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';

interface CustomToggleProps {
  children: React.ReactNode;
  eventKey: string;
  expanded: boolean;
  onClick: () => void;
}

const CustomToggle: FC<CustomToggleProps> = ({ children, eventKey, expanded, onClick }) => {
  const decoratedOnClick = useAccordionToggle(eventKey, onClick);
  const iconSize = 20;
  return (
    <div className="my-1 d-flex align-items-center">
      {expanded ? <IoMdRemoveCircle size={iconSize} /> : <IoMdAddCircle size={iconSize} />}
      <a className="ml-2" href="#" onClick={(e): void => {
        e.preventDefault(); decoratedOnClick(e);
      }}>{children}</a>
    </div>
  );
};

export interface OutlineData {
  title: string;
  topics: (string | { title: string; topics: string[] })[];
}

interface Props {
  data: OutlineData[];
}

export const UnitOutline: FC<Props> = ({ data }) => {
  const [ open, setOpen ] = useState<number>();
  return (
    <Accordion>
      {data.map((d, i) => (
        <Card key={i}>
          <Card.Header>
            <CustomToggle onClick={(): void => {
              setOpen(prev => (prev === i ? undefined : i));
            }} eventKey={i.toString()} expanded={open === i}>{d.title}</CustomToggle>
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
