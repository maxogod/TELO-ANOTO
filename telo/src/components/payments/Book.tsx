import { useParams } from "react-router-dom"
import { hotel } from "../../utils/mockData"

const Book = () => {

    const { hotel_id, room_id } = useParams()

    const room = hotel.availableRooms.find(room => room.id === parseInt(room_id as string))

    return (
        <div>
            <h1>{hotel_id}</h1>
            <h2>{room?.name}</h2>
        </div>
    )
}

export default Book