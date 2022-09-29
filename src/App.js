import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTables, getAllTables } from './redux/tablesRedux';
import { useEffect } from 'react';

//components
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  //API - do wyjaśnienia!!!!
  const allTables = useSelector(getAllTables);
  const tablesAmount = allTables.length;

  console.log('app', tablesAmount);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:id' element={<Table />} />
        <Route path={`/table/${tablesAmount}`} element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
