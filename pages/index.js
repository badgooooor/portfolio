import MainLayout from '../layouts/MainLayout'
import About from '../components/About'
import Featured from '../components/Featured'
import Landing from '../components/Landing'
import WorkList from '../components/WorkList'

export default function Home() {
  return (
    <MainLayout>
      <Landing />
      <About />
      <Featured />
      <WorkList />
    </MainLayout>
  )
}
