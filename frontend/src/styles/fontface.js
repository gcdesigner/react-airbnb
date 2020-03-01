import { createGlobalStyle } from 'styled-components';
import AirbnbCeralBold from '../fonts/Airbnb_Cereal-Bold.woff';
import AirbnbCeralBold2 from '../fonts/Airbnb_Cereal-Bold.woff2';

import AirbnbCeralBook from '../fonts/Airbnb_Cereal-Book.woff2';
import AirbnbCeralBook2 from '../fonts/Airbnb_Cereal-Book.woff2';

import AirbnbCeralMedium from '../fonts/Airbnb_Cereal-Medium.woff2';
import AirbnbCeralMedium2 from '../fonts/Airbnb_Cereal-Medium.woff2';

import AirmojixRegular from '../fonts/airmojix-Regular.woff';
import AirmojixRegular2 from '../fonts/airmojix-Regular.woff2';

export default createGlobalStyle`
  @font-face{
    font-family:Circular;
    unicode-range:U+F0000-FFFFD;
    src:url(${AirmojixRegular2}) format("woff2"),url(${AirmojixRegular}) format("woff");
    font-weight:400;
    font-display:swap
  }

  @font-face{
    font-family:Circular;
    unicode-range:U+F0000-FFFFD;
    src:url(${AirmojixRegular2}) format("woff2"),url(${AirmojixRegular}) format("woff");
    font-weight:600;
    font-display:swap
  }

  @font-face{
    font-family:Circular;
    unicode-range:U+F0000-FFFFD;
    src:url(${AirmojixRegular2}) format("woff2"),url(${AirmojixRegular}) format("woff");
    font-weight:800;
    font-display:swap
  }

  @font-face{font-family:Circular;
    src:url(${AirbnbCeralBold2}) format("woff2"),url(${AirbnbCeralBold}) format("woff");
    font-weight:800;
    font-style:normal;
    font-display:swap
  }

  @font-face{font-family:Circular;
    src:url(${AirbnbCeralMedium2}) format("woff2"),url(${AirbnbCeralMedium}) format("woff");
    font-weight:600;
    font-style:normal;
    font-display:swap
  }

  @font-face{font-family:Circular;
    src:url(${AirbnbCeralBook2}) format("woff2"),url(${AirbnbCeralBook}) format("woff");
    font-weight:400;
    font-style:normal;
    font-display:swap
  }
`;
