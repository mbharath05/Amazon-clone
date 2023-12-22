import React from 'react'
import Banner from './images/banner.jpg';
import './Home.css';
import Product from './Product';
import Graphics from './images/graphics.jpg';
import Laptop from './images/msi.jpg';
import Playstation from './images/playstation.jpg';
import Amd from './images/amd.jpg';
import Iphone from './images/iphone.jpg';
import Camera from './images/Camera.jpg';


function Home() {
  
  return (
    <div className='Home'>
        <div className='container'>
            <img src={Banner} className="home_image" alt='banner'/>
        </div>
    <div className='home_row'>
       <Product id="12" title='Nvidia GeForce RTX 4090 24GB-Architecture Graphics Card (RTX 4090 Gaming Trio 24G)' price='2,49,999' rating={5} image={Graphics} alt='graphics card' /> 
       <Product  id='34' title='MSI Modern 14, Intel i3-1115G4, 14"(35cm) FHD IPS-Level 60Hz Panel Laptop (8GB/512GB NVMe SSD)' price='39,999' rating={5} image={Laptop} alt='msi modern 14' />

    </div>
    <div className='home_row1'>
        <Product id="45" title="PlayStation 5 Console (PS5) God Of War Ragnarok Bundle" price='59,390' rating={5} image={Playstation} alt='playstation'/>
        <Product id="67" title="AMD 7000 Series Ryzen 9 7950X Desktop Processor 16 cores 32 Thread" price='60,999' rating={4} image={Amd} alt="processor"/>
        <Product id="78" title="Apple iPhone 14 Pro 128GB Deep Purple" price="1,22,990" rating={4} image={Iphone} alt="phone"/>
    </div>
    <div className='home_row'>
        <Product id='90' title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens" price='36,990' rating={5} image={Camera} alt="camera"/>
    </div>
      
    </div>
  )
}

export default Home
