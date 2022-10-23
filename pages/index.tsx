/** @format */

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ShiftsTable from '../components/ShiftsTable'
import { getNurses } from '../services/nurses.service'
import { getShifts } from '../services/shifts.service'
import styles from '../styles/Home.module.css'
import { AppDataProvider } from '../context/AppDataProvider'

const Home: NextPage = props => {
  console.log(props)
  return (
    <>
      <AppDataProvider nurses={props.nurses} shifts={props.shifts}>
        <div className='main-container'>
          <ShiftsTable />
        </div>
      </AppDataProvider>
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
