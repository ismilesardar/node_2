const events = require('events');
const EventEmitter = new events.EventEmitter();

EventEmitter.on('DayDor',()=>{
    console.log('First Demo Events Emitter');
});
EventEmitter.on('DayDor',(nam,sta)=>{
    console.log(`${nam} Second Demo Events Emitter. status code ${sta}`);
});

EventEmitter.emit('DayDor','ismile',200);