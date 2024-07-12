
if (typeof gdjs.evtsExt__Player__AnimateFallingIntoPortal !== "undefined") {
  gdjs.evtsExt__Player__AnimateFallingIntoPortal.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Player__AnimateFallingIntoPortal = {};
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPlayerObjects1= [];
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPlayerObjects2= [];
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPortalObjects1= [];
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPortalObjects2= [];

gdjs.evtsExt__Player__AnimateFallingIntoPortal.conditionTrue_0 = {val:false};
gdjs.evtsExt__Player__AnimateFallingIntoPortal.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Player__AnimateFallingIntoPortal.asyncCallback14876852 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
{/* Unknown instruction - skipped. */}}
gdjs.evtsExt__Player__AnimateFallingIntoPortal.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.75), (runtimeScene) => (gdjs.evtsExt__Player__AnimateFallingIntoPortal.asyncCallback14876852(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__Player__AnimateFallingIntoPortal.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
{/* Unknown instruction - skipped. */}{/* Unknown instruction - skipped. */}
{ //Subevents
gdjs.evtsExt__Player__AnimateFallingIntoPortal.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Player__AnimateFallingIntoPortal.func = function(runtimeScene, Player, Tween, Portal, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Player": Player
, "Portal": Portal
},
  _objectArraysMap: {
"Player": gdjs.objectsListsToArray(Player)
, "Portal": gdjs.objectsListsToArray(Portal)
},
  _behaviorNamesMap: {
"Tween": Tween
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

gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPlayerObjects1.length = 0;
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPlayerObjects2.length = 0;
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPortalObjects1.length = 0;
gdjs.evtsExt__Player__AnimateFallingIntoPortal.GDPortalObjects2.length = 0;

gdjs.evtsExt__Player__AnimateFallingIntoPortal.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__Player__AnimateFallingIntoPortal.registeredGdjsCallbacks = [];