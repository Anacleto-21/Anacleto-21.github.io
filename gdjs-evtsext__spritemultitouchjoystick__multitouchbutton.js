
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton || {};

/**
 * Behavior generated from Multitouch button
 */
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton = class MultitouchButton extends gdjs.RuntimeBehavior {
  constructor(runtimeScene, behaviorData, owner) {
    super(runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.ButtonIdentifier = behaviorData.ButtonIdentifier !== undefined ? behaviorData.ButtonIdentifier : "A";
    this._behaviorData.TouchId = Number("0") || 0;
    this._behaviorData.TouchIndex = Number("") || 0;
    this._behaviorData.IsReleased = false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.ButtonIdentifier !== newBehaviorData.ButtonIdentifier)
      this._behaviorData.ButtonIdentifier = newBehaviorData.ButtonIdentifier;
    if (oldBehaviorData.TouchId !== newBehaviorData.TouchId)
      this._behaviorData.TouchId = newBehaviorData.TouchId;
    if (oldBehaviorData.TouchIndex !== newBehaviorData.TouchIndex)
      this._behaviorData.TouchIndex = newBehaviorData.TouchIndex;
    if (oldBehaviorData.IsReleased !== newBehaviorData.IsReleased)
      this._behaviorData.IsReleased = newBehaviorData.IsReleased;

    return true;
  }

  // Properties:
  
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getButtonIdentifier() {
    return this._behaviorData.ButtonIdentifier !== undefined ? this._behaviorData.ButtonIdentifier : "A";
  }
  _setButtonIdentifier(newValue) {
    this._behaviorData.ButtonIdentifier = newValue;
  }
  _getTouchId() {
    return this._behaviorData.TouchId !== undefined ? this._behaviorData.TouchId : Number("0") || 0;
  }
  _setTouchId(newValue) {
    this._behaviorData.TouchId = newValue;
  }
  _getTouchIndex() {
    return this._behaviorData.TouchIndex !== undefined ? this._behaviorData.TouchIndex : Number("") || 0;
  }
  _setTouchIndex(newValue) {
    this._behaviorData.TouchIndex = newValue;
  }
  _getIsReleased() {
    return this._behaviorData.IsReleased !== undefined ? this._behaviorData.IsReleased : false;
  }
  _setIsReleased(newValue) {
    this._behaviorData.IsReleased = newValue;
  }
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatCount2 = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex2 = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4= [];

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3);


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i].isCollidingWithPoint(0, 0) ) {
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;}if (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("Pressed", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


{
gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIndex(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchIndex() + (1));
}
}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatCount2 = 0;
for(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex2 = 0;gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex2 < gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatCount2;++gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.repeatIndex2) {

if (true)
{

{ //Subevents: 
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsReleased((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(false);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("Idle", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
/* Unknown instruction - skipped. */}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchIndex(0);
}
}
{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val = gdjs.evtTools.input.hasTouchEnded(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId()));
}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetButtonState("Released", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIsReleased(true);
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTouchId(0);
}
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2= [];

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1);

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIsReleased() ) {
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleased = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsReleasedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2= [];

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1);

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTouchId() != 0 ) {
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects2= [];

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1);
{gdjs.evtsExt__SpriteMultitouchJoystick__SetButtonState.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getButtonIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("ButtonState") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonState = function(ButtonState, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "ButtonState") return ButtonState;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton.prototype.SetButtonStateContext.eventsList0(runtimeScene, eventsFunctionContext);
return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::MultitouchButton", gdjs.evtsExt__SpriteMultitouchJoystick__MultitouchButton.MultitouchButton);
