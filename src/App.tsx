import './styles/theme.css'
import './styles/global.css'
import { Container } from './components/Container'
import { Heading } from './components/Heading'

export function App() {
    return (
        <> 
          <Container> {/* Eu criei o componente Container, com o objetivo de reutilizar o layout.*/}
              <Heading> Chronos</Heading>
         </Container>
        </>
    )
}