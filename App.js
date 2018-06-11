/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @auther jiangronghua
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'

import ChatScreen from './src/ChatScreen';
import MinePage from './src/MinePage';

class HomePage extends React.Component{
    static navigationOptions={
        title: '首页',//设置标题内容
        header:{
            backTitle: ' ',//返回按钮标题内容（默认为上一级标题内容）
        }
    }
    constructor(props) {
        super(props);
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={{padding:10}}>Hello, Navigation!</Text>
                <Button
                    onPress={() => navigate('Chat',{user:'Sybil'})}
                    title="点击跳转"/>
            </View>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页'
        }
    },
    Certificate: {
        screen: MinePage,
        navigationOptions: {
            tabBarLabel: '我的'
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});

const MainApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat:{screen:ChatScreen},

});

export default MainApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
