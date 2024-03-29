export type Enrollment = {
  id: number;
  school: string;
  url: string;
  noShipping: boolean;
  complete: boolean;
  success: boolean;
  emailed: boolean;
  deleted: boolean;
  title: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  provinceCode: string | null;
  provinceName: string | null;
  postalCode: string | null;
  countryCode: string;
  countryName: string;
  telephoneNumber: string;
  emailAddress: string;
  paymentPlan: 'full' | 'part';
  paymentDay: number;
  paymentDate: Date;
  currencyCode: string;
  cost: number;
  deposit: number;
  installment: number;
  authorizationId: string;
  transactionTime: Date;
  authCode: string;
  maskedPan: string;
  currencySymbol: string;
  currencyName: string;
  currencyExchangeRate: number;
  courses: Array<{
    code: string;
    baseCost: number;
    planDiscount: number;
    discount: number;
    deposit: number;
    installment: number;
    name: string;
  }>;
  courseCodes: string[];
};
