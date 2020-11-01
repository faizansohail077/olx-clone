import React from 'react'
import './Houses.css'
import Product from '../components/Product'
import { Button } from '@material-ui/core'

function Houses() {
    const alert1 = () => {
        alert('This is Olx Replica')
    }
    return (
        <div className="house">
            <h1>House page Only</h1>
            <div className='house__products'>
                <Product title='5 Bds 3 Ba' price='33,000,000' img='https://apollo-singapore.akamaized.net/v1/files/csea5zpvhvkd2-PK/image;s=200x400;q=60' />
                <Product title='6 Bds 7 Ba' price='39,000,000' img='https://apollo-singapore.akamaized.net/v1/files/uwmmsvndkhl2-PK/image;s=200x400;q=60' />
                <Product title='6 Bds 7 Ba' price='39,000,000' img='https://apollo-singapore.akamaized.net/v1/files/aomfl5ssyhu93-PK/image;s=200x400;q=60' />
                <Product title='4 Bds 3 Ba' price='8,160,000' img='https://apollo-singapore.akamaized.net/v1/files/vwfq0dixzlhc2-PK/image;s=200x400;q=60' />
                <Product title='3 Bds 2 Ba' price='1,216,000' img='https://apollo-singapore.akamaized.net/v1/files/ll3qwkkso02v1-PK/image;s=200x400;q=60' />
            </div>
            <div className='house__products'>
                <Product title='5 Bds 3 Ba' price='33,000,000' img='https://apollo-singapore.akamaized.net/v1/files/694sbdea8wmn1-PK/image;s=200x400;q=60' />
                <Product title='6 Bds 7 Ba' price='3,416,000' img='https://apollo-singapore.akamaized.net/v1/files/9qd3jcs5948y2-PK/image;s=200x400;q=60' />
                <Product title='5 Bds 3 Ba' price='5,616,000' img='https://apollo-singapore.akamaized.net/v1/files/zz9nwc5fsbo52-PK/image;s=200x400;q=60' />
                <Product title='6 Bds 7 Ba' price='9.916,000' img='https://apollo-singapore.akamaized.net/v1/files/2wlegr5pcpkh3-PK/image;s=200x400;q=60' />
            </div>
            <div className='house__products'>
                
                <Product title='6 Bds 7 Ba' price='8,416,000' img='https://apollo-singapore.akamaized.net/v1/files/ny3skzvx60d41-PK/image;s=200x400;q=60' />
                <Product title='5 Bds 3 Ba' price='9,716,000' img='https://apollo-singapore.akamaized.net/v1/files/vi3zy24xq2672-PK/image;s=200x400;q=60' />
                <Product title='6 Bds 7 Ba' price='8,116,000' img='https://apollo-singapore.akamaized.net/v1/files/zunobrjbkcwr-PK/image;s=200x400;q=60' />
            </div>
            <div className='house__products'>
                <Product title='h6 Bds 7 Ba' price='5,116,000' img='https://apollo-singapore.akamaized.net/v1/files/2d2vn3l11gta1-PK/image;s=200x400;q=60' />
                <Product title='6 Bds 7 Ba' price='3,116,000' img='https://apollo-singapore.akamaized.net/v1/files/lziexqamoeu11-PK/image;s=200x400;q=60' />
                
            </div>
            <Button onClick={alert1} className='button'>Load More</Button>

        </div>
    )
}

export default Houses
