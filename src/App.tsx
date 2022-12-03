import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react";

const App = (): JSX.Element => {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <div className="bg-neutral-900 min-h-screen relative">
      <img src="/images/blur eclipse.png" alt="background effect" 
        className="absolute left-0 top-[-100px] z-[0]"/>
      <Header
        popupVisible={popupVisible}
      />
      <Main
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </div>
  )
}

export default App
