import React,{Component} from 'react'
import { Input,Button,Card, Icon, Image,Form,Label, Divider  } from 'semantic-ui-react'


class Home extends Component{
  constructor(){
    super()
    this.state = {
      query : '',
      users : [],
      error : ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }


  handleKeyPress(event){
    var self = this;
    
    if(event.key == 'Enter' && self.state.query!=''){
      self.setState({ users : []})
      fetch('http://localhost:8080/api/users/'+self.state.query,{
        method:'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type' : 'application/json',
        }
        }).then(res=>res.json()).then(function(data){
            self.setState({
              users : data,
              error : data.length==0 ? "User not found" : ""
          })
          console.log(data)
        }).catch(function(data){
          self.setState({ error : 'User not found'})
        })
    }
  }
  
  
  handleChange(event){
    this.setState({query : event.target.value})
  }
  
  

componentDidMount(){
  
}


  render(){
    return (
      <div>
      <Form>
          <Form.Field>
             <Input icon='user' placeholder='Enter user' onChange= {this.handleChange}  onKeyPress= {this.handleKeyPress} fluid />
             {this.state.error!='' ? 
             <Label basic pointing>
               {this.state.error}
              </Label>
              : null }
           </Form.Field>
      </Form>

      <Divider/>

        {this.state.users.length>0 ? 
        <Card.Group itemsPerRow={2}>
          {this.state.users.map( user => (
        <Card key={user.id} >
        
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>{user.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{user.phoneNumber}</span>
              </Card.Meta>
              <Card.Description>{user.address}</Card.Description>
            </Card.Content>
          </Card>
         )) }
         </Card.Group>
          : 
          null }

      </div>
    )

  
  }

}

export default Home