import Header from "./components/Header"
import Main from "./components/Main"

const App = (): JSX.Element => {
  return (
    <div className="bg-neutral-900 min-h-screen relative">
      <img src="/images/blur eclipse.png" alt="background effect" 
        className="absolute left-0 top-[-100px] z-[0]"/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App
