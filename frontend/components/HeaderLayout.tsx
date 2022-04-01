import React, { ReactNode } from "react"
import Head from "next/head";

type Props = {
  title?: string;
}

const HeaderLayout = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favi.png" />
    </Head> 
  )
}

export default HeaderLayout;
