
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way = {};

gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition1IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if ( gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition1IsTrue_0.val = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.func(runtimeScene, gdjs.evtsExt__SpriteMultitouchJoystick__JoystickAngle.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("ControllerIdentifier")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("JoystickIdentifier") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func = function(runtimeScene, ControllerIdentifier, JoystickIdentifier, Direction, parentEventsFunctionContext) {
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
if (argName === "JoystickIdentifier") return JoystickIdentifier;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.registeredGdjsCallbacks = [];