import { Global } from '@mantine/core';

import regular from './assets/fonts/Montserrat-Regular.ttf';
import bold from './assets/fonts/Montserrat-Bold.ttf';

function CustomFonts() {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'Montserrat CF',
            src: `url('${regular}')`,
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Montserrat CF',
            src: `url(${bold})`,
            fontWeight: 700,
            fontStyle: 'normal',
          },
        },
      ]}
    />
  );
}

export default CustomFonts;
