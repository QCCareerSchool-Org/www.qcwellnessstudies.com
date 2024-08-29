import { CaptchaProvider } from './CaptchaProvider';
import { LocationProvider } from './LocationProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <LocationProvider>
    <ScreenWidthProvider>
      <CaptchaProvider reCaptchaKey={reCaptchaKey}>
        {children}
      </CaptchaProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);
