import { CaptchaProvider } from './CaptchaProvider';
import { LocationProvider } from './LocationProvider';
import { ScreenWidthProvider } from './ScreenWidthProvider';
import { ScrollPositionProvider } from './scrollPositionProvider';

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => (
  <LocationProvider>
    <ScreenWidthProvider>
      <ScrollPositionProvider>
        <CaptchaProvider reCaptchaKey={reCaptchaKey}>
          {children}
        </CaptchaProvider>
      </ScrollPositionProvider>
    </ScreenWidthProvider>
  </LocationProvider>
);
