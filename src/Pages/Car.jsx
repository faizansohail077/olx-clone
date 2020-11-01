import { Button } from '@material-ui/core'
import React from 'react'
import Product from '../components/Product'
import './Car.css'

function Car() {
    const alert1 = () => {
        alert('This is Real Olx Replica')
    }
    return (
        <div className="car">
            <h1> car page only</h1>


            <div className='car__products'>
                <Product title='toyota corrola' price='2,360,000' img='https://apollo-singapore.akamaized.net/v1/files/9im7t8ra3q112-PK/image;s=200x400;q=60' />
                <Product title='toyota prius' price='6,365,000' img='https://apollo-singapore.akamaized.net/v1/files/f13h1m16h3mc2-PK/image;s=200x400;q=60' />
                <Product title='Brand new car' price='1,125,000' img='https://apollo-singapore.akamaized.net/v1/files/3z14cbmuny4h2-PK/image;s=200x400;q=60' />
                <Product title='Honda city' price='17,000,000' img='https://apollo-singapore.akamaized.net/v1/files/38hg9p54kpzp2-PK/image;s=200x400;q=60' />
                <Product title='xili latest' price='17,345,000' img='https://apollo-singapore.akamaized.net/v1/files/j79dfgsz5qo32-PK/image;s=200x400;q=60' />
            </div>

            <div className='car__products'>
                <Product title='Latest cultus' price='12,000,000' img='https://apollo-singapore.akamaized.net/v1/files/e1z32jkkrmhb1-PK/image;s=200x400;q=60' />
                <Product title='alto japani turbo' price='1,600,000' img='https://apollo-singapore.akamaized.net/v1/files/3h0uctjvdf601-PK/image;s=200x400;q=60' />
                <Product title='Honda civic' price='34,500,000' img='https://apollo-singapore.akamaized.net/v1/files/3q8e0jm2xz3c2-PK/image;s=200x400;q=60' />
                <Product title='honda city' price='2,275,000' img='https://apollo-singapore.akamaized.net/v1/files/eshavsbocy4f1-PK/image;s=200x400;q=60' />
            </div>

            <div className='car__products'>
                <Product title='vitz new shape' price='1,950,000' img='https://apollo-singapore.akamaized.net/v1/files/b7vxbfns98ny2-PK/image;s=200x400;q=60' />
                <Product title='mehran' price='585,000' img='https://apollo-singapore.akamaized.net/v1/files/a80rttz34z1n1-PK/image;s=200x400;q=60' />
                <Product title='toyota corrola' price='16,845,000' img='https://apollo-singapore.akamaized.net/v1/files/psic9x6gw50h1-PK/image;s=200x400;q=60' />
            </div>

            <div className='car__products'>
                <Product title='honda city' price='2,350,000' img='https://apollo-singapore.akamaized.net/v1/files/j32u7lnd6ghp3-PK/image;s=200x400;q=60' />
                <Product title='toyota aqua' price='2,423,000' img='https://apollo-singapore.akamaized.net/v1/files/w9rneq1bg7n72-PK/image;s=200x400;q=60' />
            </div>
            <Button onClick={alert1} className='button'>Load More</Button>
        </div>
    )
}

export default Car
