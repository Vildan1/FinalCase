import React from 'react';
import '../NotFound/404.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="titleNot">404 - Sayfa Bulunamadı</h1>
      <p className="subtitle">Gözünüz aydın, Darth Vader bile bu sayfayı bulamadı. Belki de bir ışın kılıcı kullanarak tekrar denemelisiniz.</p>
      <a className="cta" href="/">Ana Sayfaya Dön</a>
    </div>
  );
};

export default NotFound;
