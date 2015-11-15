var day1 = {
    squirrel : false,
    events : ['work', 'touched tree', 'pizza', 'running', 'television']
};

console.log('day1.squirrel:', day1.squirrel);
console.log('day1.wolf:', day1.wolf);

// Adding properties on the fly
day1.wolf = false;
console.log('day1.wolf:', day1.wolf);

delete day1.wolf;
console.log('day1.wolf:', day1.wolf);
console.log('wolf' in day1);
console.log('squirrel' in day1);

var journal = [
    {   events : [ 'work', 'touched tree', 'pizza', 'running', 'television'],
        squirrel : false },
    {   events : [ 'work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
        squirrel : false },
    {   events : [ 'weekend', 'cycling', 'break', 'peanuts', 'beer'],
        squirrel : true }
];

console.log('journal:', journal);
console.log('journal[2]:', journal[2]);
console.log('journal[1].squirrel:', journal[1].squirrel);
console.log('journal[0].events.length:', journal[0].events.length);
