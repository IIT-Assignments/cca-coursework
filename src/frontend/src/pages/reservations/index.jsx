import React from 'react'
import {
  useQuery,
} from 'react-query'
import { getReservations } from '../../api/reservations'
import ListContainerReservations from '../../components/list-container-reservations'

function Reservations() {
    const { isLoading, isError, data, error } = useQuery('reservations', getReservations)

    if (isLoading) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
  
    return (
      <div>
          <ListContainerReservations list={data}/>
      </div>
    )
}

export default Reservations