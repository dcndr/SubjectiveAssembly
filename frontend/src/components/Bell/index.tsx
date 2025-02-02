import { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import classNames from 'classNames'

const Bell = ({ number, initialTime }: { number: number, initialTime: DateTime }) => {
  const [ rendered, setRendered ] = useState(false),
        [ time, setTime ] = useState(initialTime)
  useEffect(() => {
    setRendered(true)
  }, [])
  return <div className={classNames(
    'text-black bg-gold-200 rounded-xl transition duration-300 text-center flex justify-between p-2 sm:px-4',
    rendered
      ? 'scale-100'
      : 'scale-0'
  )}>
    <span>Bell {number}</span>
    <span onClick={() => {
      setTime(DateTime.fromObject({
        hour  : Math.floor(Math.random() * 23),
        minute: Math.floor(Math.random() * 59)
      }))
    }}>
      {time.toLocaleString({
        hour  : '2-digit',
        hour12: false,
        minute: '2-digit'
      })}
    </span>
  </div>
}
export default Bell
