import React, { useState } from 'react'
import './portfolio.css'
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Portfolio() {
    const [modalShow, setModalShow] = useState(false)
    const [tempData, setTempData] = useState({})

    function createModal(data) {
        return(
            <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            arial-labelledby='containded-modal-title-vcenter'
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
            <a href={data.link} target='_blank' rel='noreferrer'>Go to site</a>

            </Modal>
        )
    }

    const mapped = portfolioData.map((e, i) => {
        return (
            <Card key={i} id="portfoli__card__container">
                <Image className='portfolio__image' onClick={() => {
                    setTempData({
                        image: e.image,
                        link: e.link,
                        title: e.title,
                        summary: e.summary,
                        tech: e.tech
                    })
                    setModalShow(true)
                }}
                src={e.image}
                />
                {createModal(tempData)}
            </Card>
        )
    })

  return (
    <div className='portfolio__main__container' id='portfolio'>
        <h1>PORTFOLIO</h1>
        <p>This is my GitHub Page
        <a href='https://github.com/TomaraPetty' target='_blank' rel='noreferrer'></a>
        </p>
        <Container fluid='lg' style={{ padding: '2rem 0' }}>
        <Row>

        </Row>

        </Container>
    </div>
  )
}

export default Portfolio