/** @format */

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ShiftsTable from '../components/ShiftsTable'
import { getShifts } from '../services/shifts.service'
import styles from '../styles/Home.module.css'

const Home: NextPage = props => {
  console.log(props)
  return (
    <>
      <div className='main-container'>
        <ShiftsTable />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const shifts = (await getShifts()).data
  return {
    props: { shifts }
  }
}

export default Home
