interface Properties {
  FIRSTNAME?: string; // eslint-disable-line @typescript-eslint/naming-convention
  LASTNAME?: string; // eslint-disable-line @typescript-eslint/naming-convention
  COUNTRY_CODE?: string; // eslint-disable-line @typescript-eslint/naming-convention
  PROVINCE_CODE?: string; // eslint-disable-line @typescript-eslint/naming-convention
  STATUS_WELLNESS_LEAD?: true; // eslint-disable-line @typescript-eslint/naming-convention
  STATUS_WELLNESS_STUDENT?: true; // eslint-disable-line @typescript-eslint/naming-convention
}

declare global {
  interface Window {
    sendinblue?: {
      page: (...args: unknown[]) => void;
      identify: (emailAddress: string, properties: Properties) => void;
    };
  }
}

// log the page view with a specific URL
export const brevoPageview = (title: string, url: string, path: string): void => {
  window.sendinblue?.page(title, {
    ma_title: title, // eslint-disable-line @typescript-eslint/naming-convention, camelcase
    ma_url: url, // eslint-disable-line @typescript-eslint/naming-convention, camelcase
    ma_path: path, // eslint-disable-line  @typescript-eslint/naming-convention, camelcase
  });
};

export const brevoIdentifyLead = (emailAddress: string, countryCode?: string, provinceCode?: string, firstName?: string, lastName?: string): void => {
  window.sendinblue?.identify(emailAddress, {
    FIRSTNAME: firstName, // eslint-disable-line @typescript-eslint/naming-convention
    LASTNAME: lastName, // eslint-disable-line @typescript-eslint/naming-convention
    COUNTRY_CODE: countryCode, // eslint-disable-line @typescript-eslint/naming-convention
    PROVINCE_CODE: provinceCode, // eslint-disable-line @typescript-eslint/naming-convention
    STATUS_WELLNESS_LEAD: true, // eslint-disable-line @typescript-eslint/naming-convention
  });
};

export const brevoIdentifyStudent = (emailAddress: string, countryCode?: string, provinceCode?: string, firstName?: string, lastName?: string): void => {
  window.sendinblue?.identify(emailAddress, {
    FIRSTNAME: firstName, // eslint-disable-line @typescript-eslint/naming-convention
    LASTNAME: lastName, // eslint-disable-line @typescript-eslint/naming-convention
    COUNTRY_CODE: countryCode, // eslint-disable-line @typescript-eslint/naming-convention
    PROVINCE_CODE: provinceCode, // eslint-disable-line @typescript-eslint/naming-convention
    STATUS_WELLNESS_STUDENT: true, // eslint-disable-line @typescript-eslint/naming-convention
  });
};
