import { Button } from '@material-ui/core'
import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {

    const alert1 = () => {
        alert('not real olx')
    }
    return (
        <div className='name'>
            <div className="home__row">

                <Product title='hi speed bike' price='16,000' img='https://apollo-singapore.akamaized.net/v1/files/hefb9a655j5e3-PK/image;s=200x400;q=60' />
                <Product title='high quality long lasting pencils' price='631' img='https://apollo-singapore.akamaized.net/v1/files/inckawzm2e8r-PK/image;s=200x400;q=60' />
                <Product title='honda city model 2005' price='2,100,000' img='https://apollo-singapore.akamaized.net/v1/files/chqcx3sfmsvy2-PK/image;s=200x400;q=60' />
                <Product title='sports bike' price='420,000' img='https://apollo-singapore.akamaized.net/v1/files/h58e0g61sh21-PK/image;s=200x400;q=60' />

            </div>
            <div className="home__row">

                <Product title='highly furnished apartment' price='8,500,000' img='https://apollo-singapore.akamaized.net/v1/files/v6byyllksg982-PK/image;s=200x400;q=60' />
                <Product title='Leather scandals' price='820' img='https://apollo-singapore.akamaized.net/v1/files/yb9rlfcnpduy-PK/image;s=200x400;q=60' />
                <Product title='Cell holder' price='499' img='https://apollo-singapore.akamaized.net/v1/files/mr9udffpr8523-PK/image;s=200x400;q=60' />
            </div>

            <div className="home__row">


                <Product title='highly furnished apartment' price='8,500,000' img='https://apollo-singapore.akamaized.net/v1/files/v6byyllksg982-PK/image;s=200x400;q=60' />
                <Product title='Leather scandals' price='820' img='https://apollo-singapore.akamaized.net/v1/files/yb9rlfcnpduy-PK/image;s=200x400;q=60' />
                <Product title='Cell holder' price='499' img='https://apollo-singapore.akamaized.net/v1/files/mr9udffpr8523-PK/image;s=200x400;q=60' />

                <Product title='Buitiful wedding furniture' price='10,000,000' img='https://apollo-singapore.akamaized.net/v1/files/os2944xwifld3-PK/image;s=200x400;q=60' />

            </div>
            <Button className='button' onClick={alert1} variant='contained'>Load More</Button>
        </div>
    )
}

export default Home
