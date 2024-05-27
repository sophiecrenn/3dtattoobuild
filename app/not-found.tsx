'use client'

import Link from "next/link"
import "./globals.css";
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="errorContainer">
      <h1>Error 404</h1>
        <p>Could not find requested resource</p>
        <p>Go back to the <Link className="errorLink" href="/">dashboard</Link></p>
    </div>
  )
}