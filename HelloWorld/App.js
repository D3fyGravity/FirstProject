import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{allignItems: 'center'} }> 
        <text> Hello {this.props.name} </text>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{allignItems= 'center'}}>
        <Greeting name='Paul' />
        <Greeting name= 'Tyler' /> 
        <Greeting name= 'Lex' />
        <Image source= {pic} style={{width: 150, height: 150}}/>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});