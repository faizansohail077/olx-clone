import { Button } from '@material-ui/core'
import React from 'react'
import Product from '../components/Product'
import './Motercycles.css'



function Motercycles() {
    const alert1 = () => {
        alert('This is Real Olx Replica')
    }
    return (
        <div className="motorcycle">
            <h1>Motercycles Page Only</h1>

            <div className='Motercycles__products'>
                <Product title='Bullet latest model' price='446,000' img='https://apollo-singapore.akamaized.net/v1/files/g5w88oqgk5y33-PK/image;s=200x400;q=60' />
                <Product title='Suzukis gsi' price='76,000' img='https://apollo-singapore.akamaized.net/v1/files/lxpuo2kub41i1-PK/image;s=200x400;q=60' />
                <Product title='zamso' price='40,000' img='https://apollo-singapore.akamaized.net/v1/files/xnsg0o5nusnp1-PK/image;s=200x400;q=60' />
                <Product title='honda 125' price='116,000' img='https://apollo-singapore.akamaized.net/v1/files/yiua73rr7y0p1-PK/image;s=200x400;q=60' />
                <Product title='hi speed bike' price='16,000' img='https://apollo-singapore.akamaized.net/v1/files/hefb9a655j5e3-PK/image;s=200x400;q=60' />
            </div>
            <div className='Motercycles__products'>
                <Product title='Yamaha 2017' price='576,000' img='https://apollo-singapore.akamaized.net/v1/files/xcrjac54v3g61-PK/image;s=200x400;q=60' />
                <Product title='hi speed bike' price='16,000' img='https://apollo-singapore.akamaized.net/v1/files/hefb9a655j5e3-PK/image;s=200x400;q=60' />
                <Product title='honda cg 125' price='128,000' img='https://apollo-singapore.akamaized.net/v1/files/accu11hobcqo3-PK/image;s=200x400;q=60' />
                <Product title='Bullet' price='446,000' img='https://apollo-singapore.akamaized.net/v1/files/09lidm706nox-PK/image;s=200x400;q=60' />
            </div>
            <div className='Motercycles__products'>
                <Product title='honda bike' price='46,000' img='https://apollo-singapore.akamaized.net/v1/files/5ycc05ff5fkr-PK/image;s=200x400;q=60' />
                <Product title='hi speed bike' price='16,000' img='https://apollo-singapore.akamaized.net/v1/files/hefb9a655j5e3-PK/image;s=200x400;q=60' />
                <Product title='honda deluxe' price='41,000' img='https://apollo-singapore.akamaized.net/v1/files/zrpo07h0yb1n-PK/image;s=200x400;q=60' />
            </div>
            <div className='Motercycles__products'>
                <Product title='honda shadow ace' price='556,000' img='https://apollo-singapore.akamaized.net/v1/files/ybpii6nfptc93-PK/image;s=200x400;q=60' />
                <Product title='Kawasaki ninja' price='290,000' img='https://apollo-singapore.akamaized.net/v1/files/hdyei6tyic6x-PK/image;s=200x400;q=60' />

            </div>
            <Button className='button' onClick={alert1} variant='contained'>Load More</Button>

        </div>
    )
}

export default Motercycles
