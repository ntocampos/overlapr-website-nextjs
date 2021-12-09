import React from 'react'
import overlapr from 'overlapr'

import events from '../../data/calendarEvents'
import CalendarContainer from './CalendarContainer'
import CalendarEvent from './CalendarEvent'
import { Container } from '@chakra-ui/layout'

const ScheduleDemo = () => {
  const eventData = overlapr.processData(events)
  const minValue = Math.min(...events.map(({ start }) => start))
  const maxValue = Math.max(...events.map(({ end }) => end))

  return (
    <Container as="main" minW="container.xl" my={4}>
      <h3>
        In this demo, a simple scheduling application is layed out so we can
        have a look into the library's inner workings.
      </h3>
      <CalendarContainer min={minValue} max={maxValue}>
        {eventData._ordered.map((event) => (
          <CalendarEvent key={event.id} entry={event} />
        ))}
      </CalendarContainer>
    </Container>
  )
}

export default ScheduleDemo
