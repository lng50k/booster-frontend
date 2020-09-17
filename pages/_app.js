import { createGlobalStyle } from "styled-components"
import Notification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-confirm-alert/src/react-confirm-alert.css'
config.autoAddCss = false

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
      src: url('/static/fonts/Montserrat-Regular.ttf');
      src: url('/static/fonts/Montserrat-Bold.ttf');
      src: url('/static/fonts/Montserrat-Black.ttf');
      src: url('/static/fonts/Montserrat-ExtraLight.ttf');
  }
  body {
    font-family: 'Montserrat';
  }
  button {
    font-family: 'Montserrat';
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Notification />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
