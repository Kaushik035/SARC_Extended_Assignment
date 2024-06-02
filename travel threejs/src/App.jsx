import {BrowserRouter} from 'react-router-dom'
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works} from './components'
function App() {

  return (
      <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar></Navbar>
            <Hero></Hero>
          </div>

          <About></About>
          <Experience></Experience>

          <div className='relative z-0'>
            <Contact></Contact>
          </div>
      </div>
      </BrowserRouter>
  )
}

export default App
