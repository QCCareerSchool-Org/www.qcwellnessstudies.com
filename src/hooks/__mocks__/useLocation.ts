import { Location } from '../../providers/LocationProvider';

const location: Location = { countryCode: 'CA', countryName: 'Canada', provinceCode: 'ON', provinceName: 'Ontario' };

export const useLocation = jest.fn().mockReturnValue(location);
