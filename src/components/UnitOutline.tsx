import type { FC } from 'react';
import Accordion from 'react-bootstrap/Accordion';

export interface OutlineData {
  title: string;
  topics: (string | { title: string; topics: string[] })[];
}

interface Props {
  data: OutlineData[];
}

export const UnitOutline: FC<Props> = ({ data }) => {
  return (
    <Accordion defaultActiveKey="0">
      {data.map((d, i) => (
        <Accordion.Item key={i} eventKey={i.toString()}>
          <Accordion.Header>{d.title}</Accordion.Header>
          <Accordion.Body>
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
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
