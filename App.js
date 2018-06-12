/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @auther jiangronghua
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation'

class HomeScreen extends Component<{}> {
    static navigationOptions = {
        title: '首页'
    };
    render () {
        return (
            <View style={styles.container}>
                <Text>个人主页</Text>
                {/* <Button title="跳转到详情页" onPress={() => this.props.navigation.navigate('Details')}></Button> */}
                <Button 
                    title="跳转到详情页"
                    onPress={() => {
                        this.props.navigation.navigate('Details', {
                            itemId: 86,
                            otherParam: '传过来的字符串参数'
                        })
                    }}
                />
            </View>
        )
    }
}

class DetailScreen extends Component<{}> {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state
        // title: '详情页'
        return {
            title: params ? params.otherParam : '默认标题',
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor
        }
    };
    render () {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', '初始化参数')
        return (
            <View style={styles.container}>
                <Text>主页详情</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>itemId: {JSON.stringify(otherParam)}</Text>
                <Button title="再次跳转到详情页" onPress={() => this.props.navigation.push('Details')}></Button>
                <Button title="跳转到主页" onPress={() => this.props.navigation.navigate('Home')}/>
                <Button title="返回" onPress={() => this.props.navigation.goBack()}/>
                <Button title="修改标题" onPress={() => this.props.navigation.setParams({otherParam: '点击标题'})}/>
            </View>
        )
    }
}

const RootStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailScreen
}, {
    initialRouteName: 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }
});

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
