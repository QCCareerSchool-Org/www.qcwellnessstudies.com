import { CaptchaProvider } from './CaptchaProvider';
import { IPProvider } from './ipProvider';
import { LocationProvider } from './LocationProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './ScrollPositionProvider';
import { UserValuesProvider } from './userValuesProvider';
import type { UserValues } from '@/domain/userValues';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

interface Props {
  userValues?: UserValues;
  clientIp: string | null;
}

export const Provider: React.FC<React.PropsWithChildren<Props>> = ({ children, userValues, clientIp }) => (
  <UserValuesProvider {...userValues}>
    <IPProvider clientIp={clientIp}>
      <LocationProvider>
        <ScreenWidthProvider>
          <ScrollPositionProvider>
            <CaptchaProvider reCaptchaKey={reCaptchaKey}>
              {children}
            </CaptchaProvider>
          </ScrollPositionProvider>
        </ScreenWidthProvider>
      </LocationProvider>
    </IPProvider>
  </UserValuesProvider>
);
