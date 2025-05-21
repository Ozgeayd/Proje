import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    // slugify fonksiyonu: Türkçe karakterleri ASCII'ye indirger
    function slugify(str) {
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // diakritikleri kaldır
            .replace(/ı/g, 'i')              // ı → i
            .replace(/\s+/g, '-')
            .replace(/[?]/g, '');
    }

    return (
        <div
            className="App"
            style={{
                backgroundImage: "url('/gorsel2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <h1 className="fancy-title">Özge Aydın</h1>
            <p
                className="fade-in-scale"
                style={{
                    fontSize: '1.5rem',
                    marginTop: '1rem',
                    animationDelay: '0.2s'
                }}
            >
                Yazılım geliştirmeye tutkuyla bağlı bir bilgisayar mühendisliği öğrencisi.
            </p>

            <div
                className="fade-in-scale"
                style={{
                    marginTop: '2rem',
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    animationDelay: '0.4s'
                }}
            >
                {['Ben Kimim?', 'Neler Yapabilirim', 'Projelerim', 'Eğitim', 'İletişim'].map((menu, index) => {
                    const path = slugify(menu);
                    const routes = {
                        'ben-kimim': '/ben-kimim',
                        'neler-yapabilirim': '/neler-yapabilirim',
                        'projelerim': '/projelerim',
                        'egitim': '/egitim',
                        'iletisim': '/iletisim'
                    };
                    return (
                        <Link
                            key={index}
                            to={routes[path] || '#'}
                            className="menu-link"
                            style={{ color: 'white', textDecoration: 'none' }}
                        >
                            {menu}
                        </Link>
                    );
                })}
            </div>
            <div className="social-icons" style={{ marginTop: '3rem' }}>
                <a href="https://github.com/Ozgeayd" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/github-preview.png')" }}
                    ></div>
                </a>
                <a href="https://www.instagram.com/ozgeaydinn__?igsh=dzQ1OThsNHM2bXR0&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/instagram-preview.png')" }}
                    ></div>
                </a>
                <a href="https://www.tiktok.com/@ozgeaydnn1?_t=ZS-8wWG84FdMEK&_r=1" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-tiktok" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/tiktok-preview.png')" }}
                    ></div>
                </a>
                <a href="https://www.linkedin.com/in/%C3%B6zge-ayd%C4%B1n-a63a58302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin" style={{color:'white'} }></i>
                    <div
                        className="preview-box"
                        style={{ backgroundImage: "url('/linkedin-preview.png')" }}
                    ></div>
                </a>
            </div>
        </div>
    );
}

export default Home;