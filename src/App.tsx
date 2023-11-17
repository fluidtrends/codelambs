import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/router';
import ReactLoading from 'react-loading'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const onPageLoad = () => setIsLoaded(true)

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    isLoaded
      ? <RouterProvider router={router} />
      : <div className='w-full h-full flex justify-center items-center'>
        <ReactLoading height='20%' width='20%' className='text-primary' type='spin' />
      </div>
  );
}

export default App;
