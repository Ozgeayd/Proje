import React, { useState } from 'react';

const Iletisim = () => {
    const [formData, setFormData] = useState({
        adSoyad: '',
        email: '',
        icerik: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Mesajınız gönderildi!\n\nAd Soyad: ${formData.adSoyad}\nE-mail: ${formData.email}\nİçerik: ${formData.icerik}`);
        setFormData({adSoyad:'', email:'', icerik:''});
    };

    return (
        <div style={styles.container}>
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

            <form style={styles.form} onSubmit={handleSubmit}>
                <h2 style={{marginBottom: '1.5rem', color: '#4B0082'}}>İletişim Formu</h2>

                <label style={styles.label}>Ad Soyad</label>
                <input
                    type="text"
                    name="adSoyad"
                    value={formData.adSoyad}
                    onChange={handleChange}
                    placeholder="Adınız ve Soyadınız"
                    required
                    style={styles.input}
                />

                <label style={styles.label}>E-mail</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-posta adresiniz"
                    required
                    style={styles.input}
                />

                <label style={styles.label}>İçerik</label>
                <textarea
                    name="icerik"
                    value={formData.icerik}
                    onChange={handleChange}
                    placeholder="Mesajınızı yazın..."
                    required
                    rows={5}
                    style={{...styles.input, resize: 'vertical'}}
                />

                <button type="submit" style={styles.button}>Gönder</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
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
        position: 'relative', // <== mutlak pozisyon için gerekli
    },
    form: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '2.5rem 3rem',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(75, 0, 130, 0.15)',
        maxWidth: '400px',
        width: '100%',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    label: {
        display: 'block',
        marginBottom: '.5rem',
        fontWeight: '600',
        color: '#4B0082',
    },
    input: {
        width: '100%',
        padding: '0.5rem 0.75rem',
        marginBottom: '1.25rem',
        borderRadius: '6px',
        border: '1.8px solid #9b59b6',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    button: {
        width: '100%',
        padding: '0.7rem',
        backgroundColor: '#9b59b6',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    }
};

export default Iletisim;
