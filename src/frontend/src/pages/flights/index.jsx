import React from 'react'
import ListContainer from '../../components/list-container'
import {
  useQuery,
} from 'react-query'
import { getFlights } from '../../api/flights'

function Flights() {
  const { isLoading, isError, data, error } = useQuery('flights', getFlights)

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
        <ListContainer list={data}/>
    </div>
  )
}

export default Flights