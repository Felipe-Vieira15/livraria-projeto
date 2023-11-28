import React, { useState } from 'react';

const PasswordRecoveryScreen = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    console.log('Email for recovery:', email);
    
  };

  return (
    <div className="container">
      <h1>Recuperação de Senha</h1>
      <input
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleRecovery}>Recuperar Senha</button>
    </div>
  );
};

export default PasswordRecoveryScreen;