const {sum}=require('./sum');

test('add the value', ()=>{
    expect(sum(3,5)).toBe(8);
});