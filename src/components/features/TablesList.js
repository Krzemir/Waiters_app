import { Col, Container, Row, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const TablesList = ({ allTables }) => {
  console.log('tableList', allTables);
  return (
    <Container>
      {allTables.map(table => (
        <Row key={table.id} className='d-flex align-items-center mt-2'>
          <Col md={1}>
            <h4>Table {table.id}</h4>
          </Col>
          <Col>
            <span style={{ fontWeight: 'bold' }}>Status:</span> {table.status}
          </Col>
          <Col className='d-flex justify-content-end align-items-center'>
            <NavLink to={`/table/${table.id}`}>
              <Button>Show more</Button>
            </NavLink>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

TablesList.propTypes = {
  allTables: PropTypes.arrayOf(PropTypes.object),
};

export default TablesList;
