import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { NotionRenderer } from 'react-notion-x'
import styles from '../styles/Home.module.css'
import { Data } from './api/hello'

export const getStaticProps: GetStaticProps = async (context) => {
  const notion = new NotionAPI()

  const recordMap = await notion.getPage('396f551a19fd4b248abc821d3a297d6c')
  return { props: recordMap }
}

const Home: NextPage<ExtendedRecordMap> = (recordMap) => {
  console.log(recordMap)
  return(
    <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={true} />
  )
}



export default Home
