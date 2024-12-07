import Link from 'next/link'
import React from 'react'

function page({params}:{params:{
    reviewId:string
}}) {
  return (
    <div>
        <h1>review: {params.reviewId} </h1>
        <Link href="/reviews"> back </Link>
    </div>
  
)
}

export default page