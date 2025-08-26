import HomePage from './Screens/HomePage';

import { MantineProvider } from "@mantine/core";

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

function App() {

  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  )
}

export default App
