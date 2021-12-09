import type { OverlapItem } from 'overlapr'
import { getRemFromHeight } from 'utils/sizes'

type Props = {
  entry: OverlapItem
}

const CalendarEvent = ({ entry }: Props) => {
  const { start, end, offset, height, width } = entry
  const styles = {
    top: `${getRemFromHeight(start)}rem`,
    left: `${(offset + 0.005) * 100}%`,
    height: `${getRemFromHeight(height)}rem`,
    width: `${(width - 0.01) * 100}%`,
    margin: `0 ${0.005}%`,
  }
  return (
    <div className="mx-2">
      <small
        style={styles}
        className="absolute p-2 border-2 inline-block bg-indigo-50 border-gray-400 rounded-md opacity-70"
      >
        &#123;{' '}
        <span>
          <strong>start:</strong> {start}
        </span>
        ,{' '}
        <span>
          <strong>end:</strong> {end}
        </span>{' '}
        ,
        <span>
          <strong>offset:</strong> {Math.floor(offset * 100)}%
        </span>
        ,{' '}
        <span>
          <strong>width:</strong> {Math.floor(width * 100)}%
        </span>{' '}
        &#125;
      </small>
    </div>
  )
}

export default CalendarEvent
