import { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './config/router'
import { loadAllImages } from './utils/helper'
import { images } from './utils/constants'
import Loading from './components/loading'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadAllImages(images)
    setTimeout(() => {
      setIsLoaded(true)
    }, 3000)
  }, []);

  return (
    isLoaded
      ? <RouterProvider router={router} />
      : <Loading />
  );
}

export default App;
