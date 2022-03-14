import React from 'react'
import {  useSearchParams } from 'react-router-dom'

export default function List() {
    // const {id} = useParams()
    const [searchParams] = useSearchParams()
    console.log(searchParams.getAll('id')[0]);

  return (
    <div>

    </div>
  )
}
