# react-native-starter

This project is intended to be a jumping off point for React Native
apps.  It provides a little more than the basic starter; it uses the
TabBar component to get a basic tab bar at the bottom.  This tab bar has
it's own components inside.  Within the first tab there is a scroll view
for the elements in it and each of those, including the top bar is
  a Navigator component.

Right now this project is iOS specific but the goal is to support
Android as well and hopefully most of the components can be made
generic.

## Screen shots
![Things](https://raw.githubusercontent.com/abemassry/react-native-starter/master/screenshots/things.png)
![Add Thing](https://raw.githubusercontent.com/abemassry/react-native-starter/master/screenshots/addThing.png)
![NTab](https://raw.githubusercontent.com/abemassry/react-native-starter/master/screenshots/nTab.png)
![more tab](https://raw.githubusercontent.com/abemassry/react-native-starter/master/screenshots/more.png)

## Usage
`git clone https://github.com/abemassry/react-native-starter.git`
`cd react-native-starter`
`npm install`
`npm install -g react-native`
`react-native run-ios`

## Prerequisites (which I'm using at the time of writing)
1. Mac OSX (10.12.5)
2. XCode 8.3.3
