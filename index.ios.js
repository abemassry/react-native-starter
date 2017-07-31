/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  TabBarIOS,
  NavigatorIOS,
  TouchableHighlight,
  AlertIOS,
  Button,
  Alert,
} from 'react-native';

import AddThing from './AddThing';

import { mergeIcon as tIcon } from './mergeIcon.js';
import { shareIcon as nIcon } from './shareIcon.js';
const dnsIcon = nIcon;


var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
  container: {
    flex: 1,
  },
  customWrapperStyle: {
    backgroundColor: '#bbdddd',
  },
  emptyPage: {
    flex: 1,
    paddingTop: 64,
  },
  emptyPageText: {
    margin: 10,
  },
  list: {
    backgroundColor: '#eeeeee',
    marginTop: 10,
  },
  group: {
    backgroundColor: 'white',
  },
  groupSpace: {
    height: 15,
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: StyleSheet.hairlineWidth,
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowNote: {
    fontSize: 17,
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

class ThingView extends Component {

  render() {
    return (
      <View>
        <Text style={{marginTop: 100, alignSelf: 'center'}}>A description about this thing</Text>
      </View>
    );
  }
}

class MyView extends Component {
  constructor(props) {
    super(props);
    this.state = { linodes: [], linodesCount: 0 };
  }
  _handleBackPress() {
    this.props.navigator.pop();
  }

  _handleNextPress(nextRoute) {
    this.props.navigator.push(nextRoute);
  }

  render() {
    const nextRoute = {
      component: MyView,
      title: 'Bar That',
      passProps: { myProp: 'bar' }
    };
    const items = [
      { label: 'Thing 1', id: 1 },
      { label: 'Thing 2', id: 2 },
      { label: 'Thing 3', id: 3 },
    ];

    const nav = this.props.navigator;
    return(
      <ScrollView style={styles.list}>
        <View style={styles.line}/>
        <View style={styles.group}>
          {items.map(function(item) {
            const pushNav = function() {
              nav.push({
                title: item.label,
                itemId: item.id,
                component: ThingView,
              })
            };
            return (
              <View>
                <TouchableHighlight onPress={pushNav}>
                  <View style={styles.row}>
                    <Text style={styles.rowText}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableHighlight>
                <View style={styles.separator} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

class Adds extends Component {
  _handleNavigationRequest(title, component) {
    this.refs.nav.push({
      component: component,
      title: title,
      passProps: { myProp: 'genius' },
    });
  }

  render() {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: MyView,
          title: this.props.title,
          passProps: { myProp: 'foo' },
          rightButtonTitle: 'Add',
          onRightButtonPress: () => this._handleNavigationRequest('Add Thing', AddThing),
        }}
        style={{flex: 1}}
      />
    );
  }
}

class NTab extends Component {
  render() {
    return (
      <Text style={{marginTop: 200, alignSelf: 'center'}}>
        NTab coming soon
      </Text>
    );
  }
}
class DTab extends Component {
  render() {
    return (
      <Text style={{marginTop: 200, alignSelf: 'center'}}>
        DTab coming soon
      </Text>
    );
  }
}
class More extends Component {
  render() {
    return (
      <Text style={{marginTop: 200, alignSelf: 'center'}}>
        More coming soon
      </Text>
    );
  }
}

class HelloWorld2 extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      selectedTab: 'things',
    };
  }
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'things',
    notifCount: 0,
    presses: 0,
  };

  _renderContent = (title: string, color: string, pageText: string, num?: number) => {
    if (title === 'Things') {
      return (
        <Adds
          title={title}
        />
      );
    } else if (title === 'NTab') {
      return (
        <NTab
          title={title}
        />
      );
    } else if (title === 'DTab') {
      return (
        <DTab
          title={title}
        />
      );
    } else if (title === 'Profile') {
      return (
        <More
          title={title}
        />
      );
    }
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="green"
        tintColor="white"
        unselectedItemTintColor="green"
        barTintColor="black">
        <TabBarIOS.Item
          title="Things"
          icon={{uri: tIcon, scale: 3}}
          selected={this.state.selectedTab === 'things'}
          onPress={() => {
            this.setState({
              selectedTab: 'things',
            });
          }}>
          {this._renderContent('Things', '#414A8C', 'Blue Tab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="NTab"
          icon={{uri: nIcon, scale: 3}}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'nTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'nTab',
            });
          }}>
          {this._renderContent('NTab', '#783E33', 'NTab', 1)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="DTab"
          icon={{uri: dnsIcon, scale: 3}}
          badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
          selected={this.state.selectedTab === 'dTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'dTab',
            });
          }}>
          {this._renderContent('DTab', '#783E33', 'DTab', 1)}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          title="More"
          selected={this.state.selectedTab === 'profile'}
          onPress={() => {
            this.setState({
              selectedTab: 'profile',
              notifCount: this.state.notifCount + 1,
            });
          }}>
          {this._renderContent('Profile', '#21551C', 'profile', this.state.presses)}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('reactNativeStarter', () => HelloWorld2);
