import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTables, getAllTables } from './redux/tablesRedux';
import { useEffect, useState } from 'react';

//components
import Home from './components/pages/Home';
import Table from './components/pages/Table';
import NotFound from './components/pages/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/table/:tableId' element={<Table />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </Container>
  );
}

export default App;
