import React, { useState } from 'react';
import './portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  function createModal(data) {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
        <a
          id='portfolio__modal__link'
          href={data.link}
          target='_blank'
          rel='noreferrer'
        >
          Go to site
        </a>
        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const mapped = portfolioData.map((e, i) => {
    return (
      <Col md={6}>
        <Card key={i} className='portfoli__card__container'>
          <Image
            className='portfolio__image'
            onClick={() => {
              setTempData({
                image: e.image,
                link: e.link,
                title: e.title,
                summary: e.summary,
                tech: e.tech,
              });
              setModalShow(true);
            }}
            src={e.image}
          />
          <div className='portfolio__click__info'>&#x1F50E;&#xFE0E;</div>
          {createModal(tempData)}
        </Card>
      </Col>
    );
  });

  return (
    <div className='portfolio__main__container' id='portfolio'>
      <h1 className="header">PORTFOLIO</h1>
      <p>
        Check out more projects on my GitHub Page: &nbsp;
        <a
          href='https://github.com/TomaraPetty'
          target='_blank'
          rel='noreferrer'
        >
          https://github.com/TomaraPetty
        </a>
      </p>
      <Container>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
