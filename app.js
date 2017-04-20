import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, Alert } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Toast } from 'native-base';
import Crashes from "mobile-center-crashes";

export default class App extends Component {

_onPressAlert(){
Toast.show({
              text: 'Hey!',
              position: 'bottom',
              buttonText: 'Ok',
              duration: 700

            })
}
_onPressCrash()
{
    //Crashes.generateTestCrash();
    throw new Error("Mince alors, un crash");
}

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
    
    

        
                       <ScrollView>
           
                    <Button onPress={this._onPressAlert} success full>
                      <Text> Hoy </Text>
                    </Button>
                   
                    <Button onPress={this._onPressCrash} danger full>
                      <Text> CRASH </Text>
                    </Button>
                    
                       </ScrollView>
                
                </Content>
     
            </Container>
        );
    }
}