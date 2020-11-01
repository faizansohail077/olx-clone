import React from 'react'
import './Tv-Products.css'
import Product from '../components/Product'
import { Button } from '@material-ui/core'

function Tv_Products() {
    const alert1 = () => {
        alert('This is Olx Replica')
    }
    return (
        <div className="tv">
            <h1>tv product only</h1>
            <div className='tv__products'>
                <Product title='Panasonic tv' price='8,000' img='https://apollo-singapore.akamaized.net/v1/files/dvs6adz5pl7e2-PK/image;s=200x400;q=60' />
                <Product title='mic' price='4,000' img='https://apollo-singapore.akamaized.net/v1/files/6f91kj886y6m3-PK/image;s=200x400;q=60' />
                <Product title='speaker' price='6,000' img='https://apollo-singapore.akamaized.net/v1/files/c8cspdxvbuon1-PK/image;s=200x400;q=60' />
                <Product title='audionic speaker' price='12,000' img='https://apollo-singapore.akamaized.net/v1/files/58l0hb67wj683-PK/image;s=200x400;q=60' />
                <Product title='sony tv' price='26,000' img='https://apollo-singapore.akamaized.net/v1/files/d8yrqcojufr31-PK/image;s=200x400;q=60' />
            </div>
            <div className='tv__products'>
                <Product title='portable deveice' price='2,000' img='https://apollo-singapore.akamaized.net/v1/files/w58rmnjnho87-PK/image;s=200x400;q=60' />
                <Product title='set of speakers' price='20,000' img='https://apollo-singapore.akamaized.net/v1/files/186q1xw8q8fi3-PK/image;s=200x400;q=60' />
                <Product title='china tv' price='18,000' img='https://apollo-singapore.akamaized.net/v1/files/jht1mp3qiexm2-PK/image;s=200x400;q=60' />
                <Product title='radio' price='16,000' img='https://apollo-singapore.akamaized.net/v1/files/ic2mh6950twj2-PK/image;s=200x400;q=60' />
            </div>
            <div className='tv__products'>
                <Product title='used speakers' price='3,000' img='https://apollo-singapore.akamaized.net/v1/files/ssnm004es20t1-PK/image;s=200x400;q=60' />
                <Product title='set of speakers' price='11,000' img='https://apollo-singapore.akamaized.net/v1/files/meg1bzwfn4bt3-PK/image;s=200x400;q=60' />
                <Product title='discount tv' price='9,000' img='https://apollo-singapore.akamaized.net/v1/files/t9jq7vo6nfpx2-PK/image;s=200x400;q=60' />
            </div>
            <div className='tv__products'>
               
                <Product title='portable speaker' price='8,000' img='https://apollo-singapore.akamaized.net/v1/files/fsoxipn7bexa-PK/image;s=200x400;q=60' />
                <Product title='pair of tv for sale' price='19,000' img='https://apollo-singapore.akamaized.net/v1/files/hv5i6jwevopw2-PK/image;s=200x400;q=60' />
            </div>
            <Button onClick={alert1} className='button'>Load More</Button>

        </div>
    )
}

export default Tv_Products
