const getRandomId = () => Math.random().toString(36).substr(2, 8)

export default [
  { id: getRandomId(), start: 1.5, end: 3 },
  { id: getRandomId(), start: 4, end: 6 },
  { id: getRandomId(), start: 2.5, end: 5 },
  { id: getRandomId(), start: 4, end: 5 },
  { id: getRandomId(), start: 7, end: 9 },
  { id: getRandomId(), start: 0, end: 1 },
  { id: getRandomId(), start: 10, end: 13 },
  { id: getRandomId(), start: 5.5, end: 6.5 },
  { id: getRandomId(), start: 1.5, end: 2.25 },
]
