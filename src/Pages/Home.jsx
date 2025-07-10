import texturaVerde from '../assets/verde.png';

const Home = () => {
  return (
    <div
      className="min-h-screen bg-[#07200c] bg-cover bg-fixed text-green-200 font-mono p-8 relative overflow-hidden flex justify-center items-start"
      style={{
        backgroundImage: `url(${texturaVerde})`
      }}
    >
      {/* 🌑 Sombra alrededor del borde */}
      <div className="absolute inset-0 pointer-events-none z-0 shadow-[inset_0_0_200px_80px_rgba(0,0,0,0.7)]" />

      {/* 📦 Contenido principal */}
      <div className="z-10 w-full max-w-3xl text-center space-y-6">
       

       
      </div>
    </div>
  );
};

export default Home;
