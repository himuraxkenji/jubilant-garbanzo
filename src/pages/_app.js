import MainLayout from '@layout/MainLayout';
import '../styles/tailwind.css';
import { ProvideAuth } from '@hooks/useAuth';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProvideAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProvideAuth>
    </>
  );
}

export default MyApp;
