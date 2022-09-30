import { Container } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import TableForm from '../features/TableForm';
import { getAllTables } from '../../redux/tablesRedux';

const Table = () => {
  const { tableId } = useParams();
  const tableAmount = useSelector(getAllTables).length;
  const navigate = useNavigate();

  if (tableId > tableAmount) {
    navigate('/');
  }

  return (
    <Container>
      <TableForm />
    </Container>
  );
};

export default Table;
