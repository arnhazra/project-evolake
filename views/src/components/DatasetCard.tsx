import { FC } from 'react'
import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DatasetCardProps } from '../types/Props'

const DatasetCard: FC<DatasetCardProps> = ({ id, category, name, price }) => {
    return (
        <Col xs={12} sm={12} md={6} lg={4} xl={3} className='mb-4'>
            <Link to={`/dataset/viewone/${id}`}>
                <Card>
                    <Card.Header className='pt-3'>
                        <div className={`${category.toLowerCase()}Container pt-4`}>
                            <button className='chip'>{category}</button>
                        </div>
                    </Card.Header>
                    <Card.Footer className='pt-4 pb-2 ps-4'>
                        <p className="lead">{name}</p>
                        <button className='chip'>{price === 0 ? 'FREE' : price + ' FLG'}</button>
                    </Card.Footer>
                </Card>
            </Link>
        </Col>
    )
}

export default DatasetCard