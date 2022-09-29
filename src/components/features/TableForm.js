import { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { getTableById, editTableRequest } from '../../redux/tablesRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const TableForm = () => {
  const { id } = useParams();
  const tableData = useSelector(state => getTableById(state, id));
  const navigate = useNavigate();
  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState(tableData.status);
  const [peopleAmount, setPeopleAmount] = useState(tableData.peopleAmount);
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(tableData.maxPeopleAmount);
  const [bill, setBill] = useState(tableData.bill);

  const dispatch = useDispatch();

  console.log('people', maxPeopleAmount);

  const handleSubmit = e => {
    dispatch(editTableRequest({ status, peopleAmount, maxPeopleAmount, bill, id }));
    navigate('/');
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Row className='mt-3 align-items-center'>
        <Col md={1}>
          <Form.Label>
            <h5>Status: </h5>
          </Form.Label>
        </Col>
        <Col md={5}>
          <Form.Select
            className='w-25'
            value={status}
            onChange={e => {
              setStatus(e.target.value);
              setBill('0');
              setPeopleAmount('0');
            }}
          >
            {['Free', 'Busy', 'Cleaning', 'Reserved'].map(tableStatus => (
              <option key={tableStatus}>{tableStatus}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col md={1} className='d-flex align-items-center'>
          <Form.Label>
            <h5>People: </h5>
          </Form.Label>
        </Col>
        <Col className='d-flex align-items-center' md={2}>
          <Form.Control
            {...register('peopleAmount', { max: maxPeopleAmount, min: 0 })}
            type='text'
            value={peopleAmount}
            onChange={e => {
              e.target.value > maxPeopleAmount
                ? setPeopleAmount(maxPeopleAmount)
                : setPeopleAmount(e.target.value);
            }}
          />
          &nbsp;/&nbsp;
          <Form.Control
            {...register('maxPeopleAmount', { max: 10, min: 0 })}
            type='text'
            value={maxPeopleAmount}
            onChange={e => setMaxPeopleAmount(e.target.value)}
          />
        </Col>
      </Row>
      <Row className='d-block form-text text-danger mt-2'>
        {errors.peopleAmount && (
          <span>The amount of people should be more than 0 and no more than max amount</span>
        )}
        {errors.maxPeopleAmount && (
          <span>The max amount of people should be more than 0 and no more than 10</span>
        )}
      </Row>
      {status === 'Busy' ? (
        <Row className='mt-3'>
          <Col md={1} className='d-flex align-items-center'>
            <Form.Label>
              <h5>Bill: </h5>
            </Form.Label>
          </Col>

          <Col className='d-flex align-items-center' md={1}>
            <Form.Control type='text' value={bill} onChange={e => setBill(e.target.value)} />
          </Col>
        </Row>
      ) : null}
      <Button type='submit'>Update</Button>
    </Form>
  );
};

export default TableForm;
