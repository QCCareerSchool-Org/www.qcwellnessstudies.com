import type { CourseCode } from './courseCode';

interface CourseData {
  name: string;
  url: string;
  description: string;
  certification: string | undefined;
  subjects: string[] | undefined;
  workload: string | undefined;
}

const baseUrl = 'https://www.qcwellnessstudies.com';

export const dataMap: Readonly<Record<CourseCode, CourseData>> = {
  sl: {
    name: 'Pediatric Sleep Consultant',
    url: `${baseUrl}/courses-and-tuition/sleep-consultant`,
    description: 'Help parents and caregivers set healthy long term sleep habits for their newborns and young children. Sleep consulting is a booming industry and can either be a full-time job or a source of additional income for anyone in the child care industry!',
    certification: 'Pediatric Sleep Consulting Professional™',
    subjects: undefined,
    workload: undefined,
  },
  ic: {
    name: 'Personal Caregiving',
    url: `${baseUrl}/courses-and-tuition/personal-caregiving`,
    description: 'Gain the skills you need to safely care for your loved ones at home.',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  sk: {
    name: 'Skincare Consultant',
    url: `${baseUrl}/courses-and-tuition/skincare-consultant`,
    description: 'Work with clients to build a skincare routine that will give them healthy, glowing skin. Add skincare as a revenue stream to an existing business, such as a makeup and hair studio or spa, or start your own skincare consulting business.',
    certification: undefined,
    subjects: undefined,
    workload: undefined,
  },
  ap: {
    name: 'Aging in Place',
    url: `${baseUrl}/courses-and-tuition/sleep-consultant`,
    description: 'An aging in place designer specializes in helping clients with aging concerns maintain their independence as long as possible, which is beneficial to clients\' physical, emotional and environmental wellness.',
    certification: 'Aging in Place Design Professional™',
    subjects: undefined,
    workload: undefined,
  },
  fc: {
    name: 'Professional Caregiver',
    url: `${baseUrl}/courses-and-tuition/professional-caregiver`,
    description: 'Join one of the world\'s fastest growing industries! Work for established caregiving agencies or freelance as an independent caregiver.',
    certification: 'Formal Caregiving Professional™',
    subjects: undefined,
    workload: undefined,
  },
};
