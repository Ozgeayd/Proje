import React from 'react';

const projects = [
    {
        title: "Günlük Uygulaması",
        description: "PyQt5 ile çok pencereli günlük yazma uygulaması.",
        github: "https://github.com/Ozgeayd/Gunluk_Uygulamasi",
    },
    {
        title: "Portföy Sitesi",
        description: "React ile kendimi tanıtan portföy sitesi.",
        github: "https://github.com/Ozgeayd/Proje",
    },
    {
        title: "Soru Bankası",
        description: "SQLite veri tabanı kullanarak soru ekleyebildiğim ve yazdırabildiğim bir uygulamadır.",
        github: "https://github.com/Ozgeayd/PyQt5-Soru_Bankasi",
    },
    {
        title: "Sözlük İmgeci",
        description: "Veri tabanı kullanarak girilen metne işlemler yapam küçük word uygulamasıdır.",
        github: "https://github.com/Ozgeayd/PyQt5-Sozcuk_Imgeci",
    },
    {
        title: "Kalp Şekli Örneklerim",
        description: "Şekilli kalp çizilen python projesi.",
        github: "https://github.com/Ozgeayd/Kalp_Ornekleri",
    },
];

const styles = {
    container: {
        minHeight: '100vh',
        backgroundColor: '#e6e0f8',
        backgroundImage: `
      radial-gradient(circle 2px at 20% 20%, rgba(155, 89, 182, 0.15) 100%, transparent 0),
      radial-gradient(circle 2px at 80% 80%, rgba(155, 89, 182, 0.15) 100%, transparent 0)
    `,
        backgroundSize: '40px 40px',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif',
        position: 'relative', // Ana Sayfa buton için gerekli
    },
    title: {
        fontSize: '2.5rem',
        marginBottom: '2rem',
        color: '#5e338d',
    },
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#d5c1e2',
        borderRadius: '16px',
        padding: '2rem',
        width: '260px',
        textAlign: 'center',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
    },
    cardHover: {
        transform: 'scale(1.05)',
    },
    githubLink: {
        marginTop: '1rem',
        display: 'inline-block',
        backgroundColor: '#8e44ad',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'background 0.3s',
    },
    anaSayfaButton: {
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        color: '#5e338d',
        fontWeight: 'bold',
        cursor: 'pointer',
        fontSize: '1.1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease',
    },
};

function Projelerim() {
    const [hoverIndex, setHoverIndex] = React.useState(null);
    const [buttonHover, setButtonHover] = React.useState(false);

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.anaSayfaButton,
                    backgroundColor: buttonHover
                        ? 'rgba(255, 255, 255, 0.5)'
                        : 'rgba(255, 255, 255, 0.3)',
                }}
                onClick={() => (window.location.href = '/')}
                onMouseEnter={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
            >
                Ana Sayfa
            </div>

            <h1 style={styles.title}>Projelerim</h1>
            <div style={styles.cards}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        style={{
                            ...styles.card,
                            ...(hoverIndex === index ? styles.cardHover : {}),
                        }}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.githubLink}
                        >
                            GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projelerim;
