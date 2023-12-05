import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import ReactLoading from 'react-loading'
import { loadAllImages, loadImages } from './utils/helper';
import { images } from './utils/constants';

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadAllImages(images)
    setIsLoaded(true)
    // (async () => {
    //   try { await loadImages(images) }
    //   catch { }
    //   finally { setIsLoaded(true) }
    // })()
  }, []);

  return (
    isLoaded
      ? <RouterProvider router={router} />
      : <div className='w-full h-full flex justify-center items-center'>
        <ReactLoading height='20%' width='20%' color='#ffe581' type='spin' />
      </div>
  );
}

export default App;
