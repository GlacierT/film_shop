import React from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal, InputGroup, FormControl, Row, Col, Form, OverlayTrigger, Popover } from 'react-bootstrap';

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Замовлення в обробці</Popover.Title>
    <Popover.Content>
      Перевірте свою електронну пошту, на отримання товару, чи відповіді про стан замовлення.
    </Popover.Content>
  </Popover>
);

export default function CartTotals({value, history}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    const [modalShow, setModalShow] = React.useState(false);

    function MyVerticallyCenteredModal(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Link to="/">
            <Modal.Header closeButton onClick={()=>clearCart()}>
                <Modal.Title id="contained-modal-title-vcenter">
                Оформлення замовлення
                </Modal.Title>
            </Modal.Header>
        </Link>
        <Modal.Body>
            <h4>Заповніть форму!</h4>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Введіть адресу вашої пошти"
                    aria-label="mail"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Введіть номер вашої картки"
                    aria-label="Amount (to the nearest dollar)"
                />
            </InputGroup>
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">MM/YY</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="MM/YY"
                            aria-label="my"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">CVC</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="CVC"
                            aria-label="cvc"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Form.Check type="checkbox" label="Запам'ятати мене" />
        </Modal.Body>
        <Modal.Footer>
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                <Button>Замовити</Button>  
            </OverlayTrigger>    
        </Modal.Footer>
        </Modal>
    );
}

    return (
    <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/">
                        <button 
                        className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        type="button"
                        onClick={()=>clearCart()}>
                            Очистити кошик
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">
                            Загально за обраними товарами: 
                        </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Ціна послуги: 
                        </span>
                        <strong>${cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">
                            Загально: 
                        </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                        Замовити
                    </Button>

                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}
