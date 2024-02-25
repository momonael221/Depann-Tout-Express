import React from "react";
import { Flowbite } from 'flowbite-react';
import Layout from "./components/Layout.tsx";

interface Props {
  children: React.ReactNode
}

export default function App({children}: Props) {
  return <Flowbite>
    <Layout>
      {children}
    </Layout>
  </Flowbite>
}