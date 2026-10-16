import React from 'react';

export default function LogoLoop({ logos, speed = 15, fadeOutColor = '#0f172a' }) {
  return (
    <div className="logo-loop-wrapper">
      {/* Sombras nas laterais para o ícone "sumir" aos poucos */}
      <div className="fade-mask fade-left" style={{ background: `linear-gradient(to right, ${fadeOutColor} 5%, transparent)` }}></div>
      <div className="fade-mask fade-right" style={{ background: `linear-gradient(to left, ${fadeOutColor} 5%, transparent)` }}></div>
      
      {/* Trilho que desliza */}
      <div className="logo-loop-track" style={{ animationDuration: `${speed}s` }}>
        {/* Primeira lista de ícones */}
        {logos.map((logo, index) => (
          <div key={index} className="logo-item" title={logo.title}>
            {logo.node}
          </div>
        ))}
        {/* Lista duplicada para criar o efeito infinito */}
        {logos.map((logo, index) => (
          <div key={`dup-${index}`} className="logo-item" title={logo.title}>
            {logo.node}
          </div>
        ))}
      </div>
    </div>
  );
}