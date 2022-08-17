const stringCounter = require('./stringcounter.js')

test('returns string count of given string',() => {
  expect(stringCounter('word')).toBe(4);
})

test('returns string count if its less than 10 character',() => {
  expect(stringCounter('because')).toBeLessThan(11);
})
test('return error if given string is empty', () => {
  expect(() => {
    stringCounter('')
  }).toThrow("String can't be empty")
})
