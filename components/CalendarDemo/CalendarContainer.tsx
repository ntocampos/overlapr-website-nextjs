import { getRemFromHeight } from 'utils/sizes'

const CONTAINER_PADDING = 6
const CENTERING_OFFSET = 0.75

type Props = {
  min: number
  max: number
  children: React.ReactNode
}

const CalendarContainer = ({ min, max, children }: Props) => {
  const height = getRemFromHeight(max)
  const styles = { height: `${height + CONTAINER_PADDING}rem` }

  const rulers = []
  for (let i = min; i <= max; i++) rulers.push(i)

  return (
    <div className="relative border my-4 p-4 pl-16 pt-12 w-full" style={styles}>
      <ul
        style={{ width: '96%' }}
        className="absolute left-4 h-full opacity-40"
      >
        {rulers.map((ruler) => (
          <li
            key={ruler}
            style={{ top: `${getRemFromHeight(ruler) - CENTERING_OFFSET}rem` }}
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

export default CalendarContainer
