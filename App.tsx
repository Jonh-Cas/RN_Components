import 'react-native-gesture-handler';
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import { ThemeProvider } from './src/context/themeContext/ThemeContex';

// const customTheme : Theme= {
//   dark: true,
//   colors:{

//     ...DefaultTheme.colors

// primary: string;
// background: string;
// card: string;
// text: string;
// border: string;
// notification: string;
//   }
// }

const App = () => {
  return (

    <AppState>
        <StackNavigation />
    </AppState>

  )
}

const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}


export default App;
