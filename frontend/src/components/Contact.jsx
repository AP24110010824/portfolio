import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const { hero } = portfolioData;

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace these with your actual EmailJS details
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <h3>Get in Touch</h3>
            <p>I'm currently looking for frontend internships. If you have a project in mind or just want to say hi, feel free to drop a message!</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>{hero.email}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>{hero.phone}</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Location</h4>
                  <p>SRM University AP, Amaravati</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-form-container glass"
          >
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-group">
                <label>Name</label>
                <input type="text" name="user_name" placeholder="Enter your name" required />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" name="user_email" placeholder="Enter your email" required />
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea name="message" placeholder="How can I help you?" rows="5" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`btn ${status !== 'idle' ? 'btn-disabled' : ''}`}
                disabled={status !== 'idle'}
              >
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'sending' && "Sending..."}
                {status === 'success' && <><CheckCircle size={18} /> Sent Successfully</>}
                {status === 'error' && <><AlertCircle size={18} /> Error Sending</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
