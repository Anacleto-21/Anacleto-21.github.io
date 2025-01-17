
if (typeof gdjs.evtsExt__Gamepads__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Gamepads__onFirstSceneLoaded = {};

gdjs.evtsExt__Gamepads__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__Gamepads__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Gamepads__onFirstSceneLoaded.userFunc0x9fb858 = function(runtimeScene, eventsFunctionContext) {
"use strict";

};
gdjs.evtsExt__Gamepads__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


{


gdjs.evtsExt__Gamepads__onFirstSceneLoaded.userFunc0x9fb858(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Gamepads__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Gamepads__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Gamepads__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__Gamepads__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
