import React from 'react'
import overlapr from 'overlapr'

const getRandomId = () => Math.random().toString(36).substr(2, 8)

const events = [
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

const REM_RATIO = 4
const getRem = (height) => height * REM_RATIO

const ScheduleDemo = () => {
  const eventData = overlapr.processData(events)
  const minValue = Math.min(...events.map(({ start }) => start))
  const maxValue = Math.max(...events.map(({ end }) => end))
  console.log({ eventData })

  return (
    <main className="mx-auto max-w-6xl p-8 my-4">
      <h3>
        In this demo, a simple scheduling application is layed out so we can
        have a look into the library's inner workings.
      </h3>
      <ScheduleContainer min={minValue} max={maxValue}>
        {eventData._ordered.map((event) => (
          <CustomEvent key={event.id} entry={event} />
        ))}
      </ScheduleContainer>
    </main>
  )
}

const ScheduleContainer = ({ min, max, children }) => {
  const height = getRem(max)
  const styles = { height: `${height + 6}rem` }

  const rulers = []
  for (let i = min; i <= max; i++) rulers.push(i)

  console.log({ rulers })

  return (
    <div className="relative border my-4 p-4 pl-16 pt-12 w-full" style={styles}>
      <ul
        style={{ width: '96%' }}
        className="absolute left-4 h-full opacity-40"
      >
        {rulers.map((ruler) => (
          <li
            style={{ top: `${getRem(ruler) - 0.75}rem` }}
            className="absolute flex w-full items-center"
          >
            <span>{ruler}</span>
            <span className="w-full ml-2 border-b-2 border-dashed border-gray-500 left-0 flex-grow h-0"></span>
          </li>
        ))}
      </ul>
      <div className="relative w-full h-full">{children}</div>
    </div>
  )
}

const CustomEvent = ({ entry }) => {
  const { start, end, offset, height, width } = entry
  const styles = {
    top: `${getRem(start)}rem`,
    left: `${(offset + 0.005) * 100}%`,
    height: `${getRem(height)}rem`,
    width: `${(width - 0.01) * 100}%`,
    margin: `0 ${0.005}%`,
  }
  return (
    <div className="mx-2">
      <div
        style={styles}
        className="absolute p-2 border-2 inline-block bg-indigo-50 border-gray-400 rounded-md opacity-70"
      >
        <span>
          <strong>Start:</strong> {start}
        </span>
        ,{' '}
        <span>
          <strong>End:</strong> {end}
        </span>
      </div>
    </div>
  )
}

export default ScheduleDemo
