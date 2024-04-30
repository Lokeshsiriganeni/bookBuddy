const ThemeContext = createContext()

const BookHubThemeContext =()=>{
 

 const onClickThemeIcon = () => {
    setTheme((prevTheme) => !prevTheme)
  }
  return(
  <BookHubThemeContext.Provider
    value={{
     theme,onClickThemeIcon,
    }}
  ></BookHubThemeContext.Provider>

  )

  
}

const useTheme = () => {
  return useContext(ThemeContext);
};

export default {BookHubThemeContext,useTheme}