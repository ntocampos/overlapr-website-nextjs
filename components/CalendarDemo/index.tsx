import React from 'react'
import overlapr from 'overlapr'

import events from '../../data/calendarEvents'
import Container from './CalendarContainer'
import CalendarEvent from './CalendarEvent'

const ScheduleDemo = () => {
  const eventData = overlapr.processData(events)
  const minValue = Math.min(...events.map(({ start }) => start))
  const maxValue = Math.max(...events.map(({ end }) => end))

  return (
    <main className="mx-auto max-w-6xl p-8 my-4">
      <h3>
        In this demo, a simple scheduling application is layed out so we can
        have a look into the library's inner workings.
      </h3>
      <Container min={minValue} max={maxValue}>
        {eventData._ordered.map((event) => (
          <CalendarEvent key={event.id} entry={event} />
        ))}
      </Container>
    </main>
  )
}

export default ScheduleDemo
