/** @format */

import type { NextPage } from 'next'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import Image from 'next/image'
import ShiftsTable from '../src/components/ShiftsTable'
import { getNurses } from '../src/services/nurses.service'
import { getShifts } from '../src/services/shifts.service'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react'
import { setShifts, setNurses } from '../src/redux/actions'

const Home: NextPage = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setShifts(props.shifts))
    dispatch(setNurses(props.nurses))
  }, [])
  return (
    <>
      <div className='main-container'>
        <ShiftsTable />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const [shifts, nurses] = await Promise.all([getShifts(), getNurses()])
  return {
    props: { shifts: shifts.data, nurses: nurses.data }
  }
}

export default Home
