import React ,{ Component} from 'react';
import Contacts from '../component/Table';

class Titulo extends Component {
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    )
}
  state = {
    contacts: []
  }

     
  componentDidMount() {
    fetch('http://localhost:8080/api/v1/titulo/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
      console.log('sdnjksdkjshdksjhd')
    })
    .catch(console.log)
  }
      
   
}
export default Titulo;