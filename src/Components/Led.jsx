// src/components/Led3D.jsx
const Led3D = ({ on = true, color = '#00ff00', size = 60 }) => {
  const glow = on ? `${color} 0px 0px 10px, ${color} 0px 0px 20px` : 'none';
  const shine = on ? color : '#222';

  return (
    <div
      className="rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${shine}, #000)`,
        border: '4px solid #1a1a1a',
        boxShadow: `
          inset -2px -2px 6px rgba(255,255,255,0.1),
          inset 2px 2px 8px rgba(0,0,0,0.8),
          0 0 0 4px #111,
          0 6px 12px rgba(0, 0, 0, 0.6),
          ${glow}
        `,
        transition: 'all 0.3s ease-in-out',
      }}
    />
  );
};

export default Led3D;
