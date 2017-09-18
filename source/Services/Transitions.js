'use strict';

import React from 'react-native';
import NavigationExperimental from 'react-native-deprecated-custom-components';

import buildStyleInterpolator from 'buildStyleInterpolator';

var NoTransition = {
    opacity: {
    value: 1.0,
    type: 'constant',
  }
};

const Transitions = {
    NONE: {
        ...NavigationExperimental.Navigator.SceneConfigs.FadeAndroid,
        gestures: null,
        defaultTransitionVelocity: 1000,
        animationInterpolators: {
            into: buildStyleInterpolator(NoTransition),
            out: buildStyleInterpolator(NoTransition)
        }
    },

    FROMRIGHT: NavigationExperimental.Navigator.SceneConfigs.PushFromRight,
    FROMBOTTOM: NavigationExperimental.Navigator.SceneConfigs.FloatFromBottom,
    NoBackSwipe: {
      ...NavigationExperimental.Navigator.SceneConfigs.PushFromRight,
        gestures: {
          pop: {},
        }
    },



};

export default Transitions;
