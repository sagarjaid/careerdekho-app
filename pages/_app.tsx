import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/main/Header';
import Footer from '../components/main/Footer';
import { initFirebase } from '../firebase/Firebase';
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Menu from '../components/Menu';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }: AppProps) {

  initFirebase()
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);


  if (loading) {
    return <div className='flex justify-center items-center h-screen'>Loading...</div>;
  }

  return (
    <>
      {user &&
        (
          <div className='flex justify-start bg-white text-base h-screen'>
            <div>
              <Menu />
            </div>
            <div className='w-full flex flex-col'>
              <Nav />
              <Component {...pageProps} />
            </div>
          </div >
        )
      }
      {!user &&
        (
          <div>
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        )
      }
    </>
  )
}

export default MyApp
