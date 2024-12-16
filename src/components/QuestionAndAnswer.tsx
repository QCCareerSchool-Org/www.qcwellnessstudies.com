import type { FC, PropsWithChildren } from 'react';

interface Props {
  header: string;
}

export const QuestionAndAnswer: FC<PropsWithChildren<Props>> = ({ header, children }) => (
  <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <h3 className="h4 text-dark" itemProp="name">{header}</h3>
    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
      <div itemProp="text">
        {children}
      </div>
    </div>
  </div>
);
