import Head from 'next/head'
import styled from 'styled-components'
import ReactLoading from 'react-loading'
import { 
  Title, 
  Container, 
  Footer, 
  Sidebar, 
  NavItem, 
  NavMenu, 
  ContainerBody
} from './styled-elements'

const navItemClick = event => {  
  window.location.href = event.currentTarget.dataset.url
}

export default function Layout({
  children,
  title,
  loading = false,
}) {
  return (
    <>
      {loading && 
        <div style={{
          position: "absolute",
          left: "calc(50% - 100px)",
          top: "calc(50% - 100px)",
          width: "200px",
          height: "200px",
          zIndex: "2"          
        }}>
          <ReactLoading
            type="cylon"
            color="#6c7ae0"
            width="100%"
            height="100%"
          />
        </div>
      }      
      <Container isLoading={loading}>
          <Head>            
              <meta charSet="utf-8" />
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <header> 
              <Title>Gazri Booster WHM & CPanel Automation - {title}</Title>
          </header>
          <Sidebar>
            <NavMenu>
              <NavItem onClick={navItemClick} data-url="/"> List Accounts </NavItem>
              <NavItem onClick={navItemClick} data-url="/add"> Add Account </NavItem>
            </NavMenu>
          </Sidebar>
          <ContainerBody>
            {children}
          </ContainerBody>
          <Footer>{'Gazri Inc 2020'}</Footer>
      </Container>      
    </>
  )
}