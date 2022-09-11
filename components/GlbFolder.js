import dynamic from 'next/dynamic'

const Model = dynamic(
  () => import('../components/ContactMe'),
  { ssr: false }
)

export default function Home() {
    return (<Model />)
  }