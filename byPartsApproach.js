/*
	File: byPartsApproach.js
	-------------------------
	This program compose objects out of sets of parts.
*/

var evnetuality = function(that){
	var registry = {};
	//fire an event on an object. The event can be either
	//a string containing the name of the event or an object
	//containing a type property containing the name of the
	//event. Handles registry by the 'on' method that match
	//the event name will be invoked.
	that.fire = function(event){
		var array , 
			func,
			handler,
			i,
			type = typeof event === 'string' ? event : event.type;
		//If an array of the handlers exist for this event, then
		//loop through it and execute the handlers in orders.
		if(registry.hasOwnProperty(type)){
			array = registry[type];
			for(i = 0; i < array.length; i += 1){
				handler = array[i];
		//A handler record contains a method and an optional
		//array of parameters. If the method is a name, look
		//up the function
				func = handler.method;
				if(typeof func === 'string'){
					func = this[func];
				}
		//Invoke a handler. If the record contained parameters,
		//then pass them. Otherwise, pass the event object.
				func.apply(this, handler.parameters || [event]);
			}
		}
		return this;
	};
	that.on =function (type, method, parameters){
		//Register an event. Make a handler record. Put it
		//in a handler array, making one if it doesn't yet
		//exist for this type.
		var handler = {
			method : method,
			parameters : parameters
		};
		if(registry.hasOwnProperty(type)){
			registry[type].push(handler);
		}else{
			registry[type] = [handler];
		}
		return this;
	}
	return that;
};

//evnetuality(that);