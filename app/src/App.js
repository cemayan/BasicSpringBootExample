
import React,{Component} from 'react'
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Input,
} from 'semantic-ui-react'


import Home from './Components/Home'

class App extends Component  {


  render(){
    return(
      <div>
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='favicon.ico' style={{ marginRight: '1.5em' }} />
            Project
          </Menu.Item>
        </Container>
      </Menu>
  
      <Container text style={{ marginTop: '7em' }}>
          <Home/>
      </Container>
  
    </div>

    )
  }

}



export default App