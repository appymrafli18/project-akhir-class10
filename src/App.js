import Pages from './components/PAGES/Pages';
import DetailProvider from './context/DetailProduct';
import PaymentProvider from './context/PaymentProduct';

function App() {
  return (
    <>
      <DetailProvider>
        <PaymentProvider>
          <Pages />
        </PaymentProvider>
      </DetailProvider>
    </>
  );
}

export default App;
