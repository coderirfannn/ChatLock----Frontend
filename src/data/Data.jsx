import axios from 'axios'
import React, { useContext } from 'react'
import { webSocketContext } from '../context/UserContext'

const { serverUr } = useContext(webSocketContext)
export const profileData = async () => {
    const userProfiee = await axios.get(`${serverUr}/profile`)
}


