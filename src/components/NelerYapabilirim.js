import React from 'react';
import { FaCode, FaHtml5, FaPython, FaReact, FaDatabase, FaJava } from 'react-icons/fa';

function NelerYapabilirim() {
    const skills = [
        {
            title: "C#",
            icon: <FaCode size={40} color="#fff" />,
            level: 70
        },
        {
            title: "HTML / CSS",
            icon: <FaHtml5 size={40} color="#fff" />,
            level: 85
        },
        {
            title: "Python",
            icon: <FaPython size={40} color="#fff" />,
            level: 90
        },
        {
            title: "React",
            icon: <FaReact size={40} color="#fff" />,
            level: 75
        },
        {
            title: "SQLite",
            icon: <FaDatabase size={40} color="#fff" />,
            level: 80
        },
        {
            title: "Java",
            icon: <FaJava size={40} color="#fff" />,
            level: 60
        },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '3rem 2rem',
                color: '#4A148C',
                backgroundColor: '#e6e0f8',
                backgroundImage: `
                    radial-gradient(circle 2px at 20% 20%, rgba(155, 89, 182, 0.15) 100%, transparent 0),
                    radial-gradient(circle 2px at 80% 80%, rgba(155, 89, 182, 0.15) 100%, transparent 0)
                `,
                backgroundSize: '40px 40px',
                position: 'relative',
            }}
        >
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

            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Neler Yapabilirim?</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem' }}>
                Aşağıda yer alan teknolojilerdeki bilgi seviyem:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                {skills.map(({ title, icon, level }, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#d5c1e2',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            width: '260px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
                        }}
                    >
                        <div>{icon}</div>
                        <h3 style={{ marginTop: '1rem', marginBottom: '0.7rem' }}>{title}</h3>
                        <div style={{ width: '100%', backgroundColor: '#e0d5ec', borderRadius: '8px', height: '10px', marginTop: '0.5rem' }}>
                            <div style={{
                                width: `${level}%`,
                                height: '100%',
                                backgroundColor: '#7b519d',
                                borderRadius: '8px',
                                transition: 'width 0.5s ease'
                            }}></div>
                        </div>
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>{level}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NelerYapabilirim;
