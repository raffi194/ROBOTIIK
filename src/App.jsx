import React from 'react';
import './App.css';

// 1. Impor komponen Navbar dari filenya
import Navbar from './Navbar'; 

// Impor FontAwesome yang sudah ada
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  return (
    <div>
      {/* 2. Panggil/tampilkan komponen Navbar di sini */}
      <Navbar />

      {/* Konten lain di bawah navbar */}
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Selamat Datang!</h1>
        <p>Konten halaman Anda dimulai di bawah navbar.</p>
        
        {/* Ikon Font Awesome */}
        <FontAwesomeIcon icon={faYoutube} size="3x" />
        <FontAwesomeIcon icon={faEnvelope} size="3x" style={{ marginLeft: '15px' }} />
      </div>

    </div>
  );
}

export default App;