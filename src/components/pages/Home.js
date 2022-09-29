import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesRedux';

//components
import TablesList from '../features/TablesList';

const Home = () => {
  const allTables = useSelector(getAllTables);

  return (
    <Container>
      <h3>All tables</h3>
      <TablesList allTables={allTables} />
    </Container>
  );
};

export default Home;
