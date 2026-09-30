
const { dummy } = require('./data.json')
const {data,dataMap} = require('./data')

test('check', ()=>{
    expect(dataMap(dummy)).toEqual([dummy[0]])
});