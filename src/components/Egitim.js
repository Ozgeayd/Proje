import React from 'react';

function Egitim() {
    const timeline = [
        { year: "2019 - 2023", title: "Cahit Zarifoğlu Anadolu Lisesi" },
        { year: "2023 - 2028", title: "Balıkesir Üniversitesi - Bilgisayar Mühendisliği" },
        { year: "2023 - 2024", title: "IEEE RAS Teknik Ekip Üyesi" }
    ];

    return (
        <div
            style={{
                backgroundColor: '#e6e0f8',
                backgroundImage: `
                    radial-gradient(circle 2px at 20% 20%, rgba(155, 89, 182, 0.15) 100%, transparent 0),
                    radial-gradient(circle 2px at 80% 80%, rgba(155, 89, 182, 0.15) 100%, transparent 0)
                `,
                backgroundSize: '40px 40px',
                padding: '4rem 2rem',
                minHeight: '100vh',
                fontFamily: 'sans-serif',
                color: '#4A148C',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Ana Sayfa Butonu */}
            <div
                style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    color: '#4A148C',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    transition: 'background-color 0.3s ease',
                    userSelect: 'none',
                }}
                onClick={() => (window.location.href = '/')}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
            >
                Ana Sayfa
            </div>

            <h1 style={{
                textAlign: 'center',
                marginBottom: '3rem',
                fontSize: '2.8rem',
                fontWeight: 'bold'
            }}>
                Eğitim ve Deneyimlerim
            </h1>

            {/* Zikzak çizgi (sabit ama kayıyormuş gibi animasyonlu) */}
            <div
                style={{
                    width: '100%',
                    height: '40px',
                    marginBottom: '4rem',
                    backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'40\' viewBox=\'0 0 200 40\'><path d=\'M0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20\' fill=\'transparent\' stroke=\'%238E24AA\' stroke-width=\'3\'/></svg>")',
                    backgroundRepeat: 'repeat-x',
                    backgroundPosition: '0 0',
                    animation: 'scrollZigzag 5s linear infinite',
                }}
            />

            {/* Kartlar */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2rem',
                justifyContent: 'center',
                zIndex: 1,
            }}>
                {timeline.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#d5c1e2',
                            padding: '1.5rem 2rem',
                            borderRadius: '16px',
                            minWidth: '280px',
                            maxWidth: '300px',
                            textAlign: 'center',
                            color: '#4A148C',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'default'
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.06)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.35)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
                        }}
                    >
                        <h2 style={{ margin: 0 }}>{item.year}</h2>
                        <p style={{ marginTop: '0.7rem', fontSize: '1.1rem' }}>{item.title}</p>
                    </div>
                ))}
            </div>

            {/* Animasyon tanımı */}
            <style>
                {`
                @keyframes scrollZigzag {
                    0% { background-position: 0 0; }
                    100% { background-position: -200px 0; }
                }
                `}
            </style>
        </div>
    );
}

export default Egitim;
