export default function comingSoon() {
  return (
    <>
      <div className="container">
        <h1>Coming Soon</h1>
      </div>

      <style jsx>{`
        .container {
          height: 80vh;
          display: grid;
          place-items: center;
          position: relative;
          background: url(https://images.unsplash.com/photo-1502514276381-1ea51dfe201c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80)
            center/cover;
        }
        .container::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.5;
          mix-blend-mode: screen;
          background-size: 1000% 1000%;
          background-image: linear-gradient(
            247deg,
            #aaffec,
            #ff4ecd,
            #0070f3,
            #6600f3,
            #f30094
          );

          animation: bgGradient 20s ease infinite;
        }
        @keyframes bgGradient {
          0% {
            background-position: 0% 28%;
          }
          50% {
            background-position: 100% 73%;
          }
          100% {
            background-position: 0% 28%;
          }
        }

        h1 {
          color: #fff;
          font-weight: 900;
          font-size: 5rem;
          text-align: center;
          position: relative;
          z-index: 1;
          text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
          letter-spacing: 0;
        }
      `}</style>
    </>
  );
}
