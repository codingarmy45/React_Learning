import React from 'react'
import { useContext } from 'react'
import AuthContext from './AuthContext'
const Dashboard = () => {
    const {email} = useContext(AuthContext)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>{email}</p>
    </div>
  )
}

export default Dashboard