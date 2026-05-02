import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="glass" style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
              <input type="text" placeholder="John Doe" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
              <textarea placeholder="Hello..." rows="5" style={{...inputStyle, resize: 'vertical'}}></textarea>
            </div>
            <button type="button" className="btn" style={{ width: '100%', marginTop: '1rem' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  background: 'rgba(0,0,0,0.2)',
  border: '1px solid var(--border-color)',
  borderRadius: '0.5rem',
  color: 'var(--text-main)',
  fontFamily: 'inherit',
  outline: 'none'
};

export default Contact;
