import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { FaBitcoin, FaEthereum, FaCubes } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import Image from 'next/image';
import landingImage from '../public/images/1.png';
import image2 from '../public/images/2.png';
import image3 from '../public/images/3.png';
import MoreContent from './MoreContent';


const Home = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddProductClick = () => {
    router.push('/add-product');
  };

  const handleQRScannerClick = () => {
    router.push('/qrscanner');
  };

  const handleLearnMoreClick = () => {
    const moreContentSection = document.getElementById('moreContent');
    moreContentSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={contentContainerStyle}>
        <div style={leftContentStyle}>
          <div style={iconContainerStyle}>
            <FaBitcoin style={iconStyle} />
            <FaEthereum style={iconStyle} />
            <FaCubes style={iconStyle} />
          </div>
          <h1 style={titleStyle}>AUTHENTITHIEF</h1>
          <p style={textStyle}>Revolutionizing anti-counterfeit with blockchain technology.</p>
          <div style={buttonContainerStyle}>
            <button onClick={handleAddProductClick} style={buttonStyle}>
              Manufacturer
            </button>
            <button onClick={handleQRScannerClick} style={buttonStyle}>
              Consumer
            </button>
          </div>
        </div>
        <div style={rightContentStyle}>
          <video autoPlay loop muted style={backgroundVideoStyle}>
            <source src="/videos/2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div style={learnMoreContainerStyle}>
            <button onClick={handleLearnMoreClick} style={learnMoreButtonStyle}>
              Learn More
            </button>
            <p style={antiCounterfeitTextStyle}>
              Learn more about our revolutionary anti-counterfeit system powered by blockchain technology.
            </p>
          </div>
        </div>
      </div>
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <div style={footerIconContainerStyle}>
            <FaBitcoin style={footerIconStyle} />
            <FaEthereum style={footerIconStyle} />
            <FaCubes style={footerIconStyle} />
            <SiSolidity style={footerIconStyle} />
            <Image src={landingImage} alt="Landing Image" style={footerIconStyle} />
            <Image src={image2} alt="Image 2" style={footerIconStyle} />
            <Image src={image3} alt="Image 3" style={footerIconStyle} />
          </div>
        </div>
      </footer>
      <MoreContent />
    </div>
  );
};

const containerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 1,
  overflow: 'auto',
  fontFamily: 'Roboto, sans-serif',
  background: 'radial-gradient(circle, #1a0938, #000000)',
  color: '#fff',
};

const contentContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem',
};

const leftContentStyle = {
  flex: '1',
  marginRight: '2rem',
  textAlign: 'center',
  paddingLeft: '2rem',
};

const rightContentStyle = {
  position: 'relative',
  flex: '1',
  overflow: 'hidden',
  paddingTop: '5rem',
};

const backgroundVideoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
};

const iconContainerStyle = {
  marginBottom: '1rem',
};

const iconStyle = {
  fontSize: '3rem',
  marginRight: '0.5rem',
};

const titleStyle = {
  fontSize: '4rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
  textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
};

const textStyle = {
  fontSize: '1.8rem',
  marginBottom: '2rem',
  textShadow: '0 0 5px rgba(255, 255, 255, 0.3)',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem 3rem',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '50px',
  cursor: 'pointer',
  marginRight: '1rem',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
};

const learnMoreButtonStyle = {
  padding: '0.8rem 2.5rem',
  fontSize: '1.1rem',
  fontWeight: 'bold',
  backgroundImage: 'linear-gradient(to right, #8e2de2, #4a00e0)',
  color: '#fff',
  border: '2px solid #6f42c1',
  borderRadius: '50px',
  cursor: 'pointer',
  marginTop: '1rem',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 0 10px rgba(116, 79, 160, 0.5)',
};

const learnMoreContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const antiCounterfeitTextStyle = {
  fontSize: '1rem',
  marginTop: '1rem',
  textAlign: 'center',
};

const footerStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  padding: '2rem 0',
  marginTop: '2rem',
};

const footerContentStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  maxWidth: '1200px',
  margin: '0 auto',
};

const footerIconContainerStyle = {
  fontSize: '4rem',
  display: 'flex',
  alignItems: 'center',
};

const footerIconStyle = {
  marginRight: '1rem',
  width: '4rem',
  height: '4rem',
};



export default Home;
