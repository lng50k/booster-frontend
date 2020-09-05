import Head from 'next/head'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const Footer = styled.footer`
  padding: 20px 0;
  font-size: 20px;
`;

export default function Layout({
  children,
  title = 'Gazri Booster',
}) {
  return (
    <Container>
        <Head>            
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header> 
            <Title>{title}</Title>
        </header>           
        {children}
        <Footer>{'Gazri Inc'}</Footer>
    </Container>
  )
}