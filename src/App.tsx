import React from "react";
import {Flowbite} from 'flowbite-react';
import Layout from "./components/Layout.tsx";

interface Props {
  routers: React.ReactNode
}

export default function App({routers}: Props) {
  return <Flowbite>
    <Layout>
      {routers}
    </Layout>
  </Flowbite>
}