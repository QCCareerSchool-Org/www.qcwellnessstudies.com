import type { OutlineData } from '@/components/UnitOutline';

export const units: Record<string, OutlineData[]> = {
  a: [
    {
      title: 'Introduction to Informal Caregiving',
      topics: [
        'What is an Informal Caregiver?',
        'Key skills & personality traits for informal caregivers',
        'Roles & responsibilities of an informal caregiver',
        'Using care plans and care logs',
      ],
    },
    {
      title: 'Your Role as a Caregiver',
      topics: [
        'Advocating for your loved one\'s health ',
        'Providing companionship & physical support',
        'Observing changes in someone\'s behavior',
        'Working with a care plan',
        'Using inclusive and empowering language',
        'Protecting your loved one from abuse and neglect',
        'Caregiver burnout and self-care for caregivers',
      ],
    },
  ],
  b: [
    {
      title: 'Understanding Care Needs',
      topics: [
        'Working with an aging loved one',
        'The challenges of aging',
        'Common health conditions, such as dementia, arthritis, etc.',
        'Working with a loved one who has a disability, medical condition or impairment',
        'Working with children',
      ],
    },
    {
      title: 'Caregiving Duties',
      topics: [
        'Medical support & dealing with medical emergencies',
        'Providing companionship',
        'Soft skills for informal caregivers',
        'Safety considerations',
        {
          title: 'Activities of daily living (ADLs)',
          topics: [
            'Mobility',
            'Dressing',
            'Bathing & showering',
            'General hygiene',
            'Toileting',
            'Eating',
          ],
        },
        {
          title: 'Instrumental activities of daily living (ADLs)',
          topics: [
            'Transportation',
            'Shopping',
            'Cooking',
            'Home management & maintenance',
            'Household supply management',
            'Financial management',
            'Communication',
          ],
        },
        'Holistic health & wellness',
        'Keeping a care log',
        'How to handle abusive behavior from loved ones',
      ],
    },
  ],
  c: [
    {
      title: 'Technical Skills for Informal Caregivers',
      topics: [
        {
          title: 'Mobility',
          topics: [
            'Using a transfer board',
            'Using a transfer belt',
            'Helping a loved one who uses a cane',
            'Helping a loved one who uses a walker',
            'Transferring a loved one to a wheelchair or scooter',
            'Moving your loved one in bed',
          ],
        },
        {
          title: 'Dressing',
          topics: [
            'Helping your loved one put on/take off a shirt',
            'Helping your loved one put on/take off socks and shoes',
            'Helping your loved one put on/take off pants',
            'Helping your loved one put on/take off underwear',
          ],
        },
        {
          title: 'Toileting',
          topics: [
            'Helping your loved one use a toilet',
            'Helping your loved one use a portable commode',
            'Helping your loved one use a bedpan',
            'Helping your loved one who wears protective underwear',
          ],
        },
        {
          title: 'Bathing and Showering',
          topics: [
            'Helping your loved one have a bath',
            'Helping your loved one have a shower',
            'Helping your loved one have a bed bath (sponge bath)',
            'Helping your loved one shampoo their hair',
          ],
        },
        {
          title: 'Bathing and Showering',
          topics: [
            'Hand washing',
            'Oral hygiene',
            'Shaving',
            'Brushing, combing, styling your loved one\'s hair',
            'Nail and foot care',
          ],
        },
        {
          title: 'Eating',
          topics: [],
        },
      ],
    },
  ],
};
