import React from 'react';

function BenKimim() {
    return (
        <div
            style={{
                minHeight: '100vh',
                backgroundColor: '#e6e0f8',
                backgroundImage: `
                    radial-gradient(circle 2px at 20% 20%, rgba(155, 89, 182, 0.15) 100%, transparent 0),
                    radial-gradient(circle 2px at 80% 80%, rgba(155, 89, 182, 0.15) 100%, transparent 0)
                `,
                backgroundSize: '40px 40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                fontFamily: 'sans-serif',
                position: 'relative' // Ana Sayfa butonunun absolute konumu için
            }}
        >
            {/* Ana Sayfa Butonu */}
            <div
                onClick={() => window.location.href = '/'}
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    color: '#5e338d',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
            >
                Ana Sayfa
            </div>

            {/* Kart */}
            <div style={{
                backgroundColor: '#d5c1e2',
                padding: '2rem 3rem',
                borderRadius: '24px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
                maxWidth: '900px',
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '2rem',
                animation: 'fadeInUp 1.2s ease'
            }}>
                {/* Profil Görseli */}
                <img
                    src="/profil.jpg"
                    alt="Profil"
                    style={{
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #a67fbf',
                    }}
                />

                {/* Bilgi Alanı */}
                <div style={{ color: '#4A148C', flex: '1', fontSize: '1.2rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', animation: 'popTitle 1s ease' }}>Ben Kimim?</h1>
                    <p><strong>Ad-Soyad:</strong> Özge Aydın</p>
                    <p><strong>Yaş:</strong> 19</p>
                    <p><strong>E-mail:</strong> ozgeaydn8352@gmail.com</p>
                    <p><strong>Konum:</strong> Balıkesir / Bigadiç</p>
                    <p style={{ marginTop: '1rem' }}>
                        Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim. 19 yaşındayım. Doğma büyüme Orduluyum. Genel olarak
                        kitap okumayı severim. 1 sene kadar piyano ile ilgilendim.
                    </p>
                </div>
            </div>

            {/* Animasyonlar */}
            <style>
                {`
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(50px); }
                    100% { opacity: 1; transform: translateY(0); }
                }

                @keyframes popTitle {
                    0% { transform: scale(0.7); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                `}
            </style>
        </div>
    );
}

export default BenKimim;
