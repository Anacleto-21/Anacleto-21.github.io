
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState = {};

gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("__MultitouchJoystick").getChild("Controllers").getChild((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ControllerIdentifier")) || 0 : 0)).getChild("Buttons").getChild((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Button") : "")).getChild("State").setString((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ButtonState") : ""));
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.func = function(runtimeScene, ControllerIdentifier, Button, ButtonState, parentEventsFunctionContext) {
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
if (argName === "ControllerIdentifier") return ControllerIdentifier;
if (argName === "Button") return Button;
if (argName === "ButtonState") return ButtonState;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.registeredGdjsCallbacks = [];