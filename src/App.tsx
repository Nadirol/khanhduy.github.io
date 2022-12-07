import Header from "./components/Header"
import Main from "./components/Main"
import { createContext, useState } from "react";

export const ThemeContext = createContext<any>(null);

const App = (): JSX.Element => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme}`}>
        <div className="bg-secondary-light-light dark:bg-neutral-900 min-h-screen relative">
          <img src="/images/blur eclipse.png" alt="background effect" 
            className="hidden dark:block absolute left-0 top-[-100px] z-[0]"/>
          <Header
            popupVisible={popupVisible}
            toggleTheme={toggleTheme}
          />
          <Main
            popupVisible={popupVisible}
            setPopupVisible={setPopupVisible}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
