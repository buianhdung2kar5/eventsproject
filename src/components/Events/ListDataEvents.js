import '../../style/global.css'
import { dataEvents } from '../../data/events/events'
import CardEvent from './CardEvent'
export default function ListDataEvents({ data }) {
  const dataEvent = data ? data : dataEvents
  const url = window.location.href
  const isEventsPage = url
    .split('/')
    .map((item) => {
      return item.toString() === 'events' ? true : false
    })
    .includes(true)
  const dataEventFiltered = isEventsPage ? dataEvent : dataEvent.slice(0, 6)
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ${isEventsPage ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} justify-items-stretch align-items-center w-full gap-y-4 gap-x-8 line-clamp-2 p-4`}
    >
      {dataEventFiltered?.map((item) => {
        return <CardEvent idEvent={item.id} />
      })}
    </div>
  )
}
