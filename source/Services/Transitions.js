'use strict';

import React, {
    Navigator
} from 'react-native';

import buildStyleInterpolator from 'buildStyleInterpolator';

var NoTransition = {
    opacity: {
    value: 1.0,
    type: 'constant',
  }
};

const Transitions = {
    NONE: {
        ...Navigator.SceneConfigs.FadeAndroid,
        gestures: null,
        defaultTransitionVelocity: 1000,
        animationInterpolators: {
            into: buildStyleInterpolator(NoTransition),
            out: buildStyleInterpolator(NoTransition)
        }
    },

    FROMRIGHT: Navigator.SceneConfigs.PushFromRight,
    FROMBOTTOM: Navigator.SceneConfigs.FloatFromBottom,
    NoBackSwipe: {
      ...Navigator.SceneConfigs.PushFromRight,
        gestures: {
          pop: {},
        }
    },



};

export default Transitions;
