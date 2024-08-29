import type { OutlineData } from '@/components/UnitOutline';

export const units: Record<string, OutlineData[]> = {
  a: [
    {
      title: 'Introduction to Aging in Place Design',
      topics: [
        'What Aging in Place actually means',
        'Why Aging in Place services are in high demand',
        'When are Aging in Place services required',
        'Types of Aging in Place services offered',
        'The role of the Aging in Place Decorator/Designer',
      ],
    },
    {
      title: 'The Aging Body',
      topics: [
        'What happens to the body as we age',
        'Common medical conditions and the accessibility needs they create',
        'Options for accommodating the challenges of aging',
        'Cultural stigma surrounding aging',
        'Planning for aging: steps to take at different ages to prepare for aging',
      ],
    },
  ],
  b: [
    {
      title: 'Designing for Aging in Place',
      topics: [
        'Building codes and the ADA',
        'The principles of universal design',
        'The principles of visitability design',
        'The principles of accessibility design',
        'Why accessibility is important to design',
        'Types of disabilities and how to design to accommodate for them',
        'Designing room-by-room with a focus on function, ease of use, and safety',
      ],
    },
    {
      title: 'Conducting an Aging in Place Needs Assessment',
      topics: [
        'Exercising etiquette and empathy',
        'Addressing potentially sensitive topics',
        'Different aging situations and their unique needs and challenges',
        'Adapting to current needs vs. planning for future needs',
        {
          title: 'Conducting an effective needs assessment:',
          topics: [
            'Budget',
            'Support networks and cohabitation',
            'Age',
            'Medical conditions',
            'Identifying current needs',
            'Identifying likely future needs',
            'Identifying risks',
            'Room by room assessment',
            'Prioritizing upgrades, renovations and adjustments',
          ],
        },
        {
          title: 'Project funding and resources:',
          topics: [
            'Loans, grants and tax credits for Aging in Place renovations',
            'Non-profit groups and government resources',
            'Reverse mortgages',
          ],
        },
        'The aging in place team: designers, contractors, physiotherapists, occupational therapists and more',
        {
          title: 'Navigating the Family Relationship:',
          topics: [
            'When parents become the ones cared for',
            'When children have a new role as the caregiver',
            'When opinions differ',
          ],
        },
      ],
    },
  ],
};
