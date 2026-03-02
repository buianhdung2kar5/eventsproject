import { DetailEvents } from '../../data/events/DetailEvents'
import { VscOrganization } from 'react-icons/vsc'
import { MdOutlineDateRange } from 'react-icons/md'
import { GiPositionMarker } from 'react-icons/gi'
import { IoMdPeople } from 'react-icons/io'
import '../../style/global.css'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
import CardItem from '../../ui/CardItem'
export default function CardEvent({ idEvent }) {
  const navigate = useNavigate()
  const event = DetailEvents.find((item) => item.id === idEvent)
  const viewDetail = (id) => {
    navigate(`${PATH.EVENTS}/${id}`)
  }
  return <CardItem item={event} type="find" viewDetail={viewDetail} />
}
