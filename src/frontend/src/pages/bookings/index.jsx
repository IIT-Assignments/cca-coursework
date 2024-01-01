import React from 'react'
import {
  useQuery,
} from 'react-query'
import { getBookings } from '../../api/bookings'
import ListContainerBookings from '../../components/list-container-bookings'

function Bookings() {
    const { isLoading, isError, data, error } = useQuery('bookings', getBookings)

    if (isLoading) {
      return <span>Loading...</span>
    }
  
    if (isError) {
      return <span>Error: {error.message}</span>
    }
  
    return (
      <div>
          <ListContainerBookings list={data}/>
      </div>
    )
}

export default Bookings