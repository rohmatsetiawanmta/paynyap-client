export default function Home() {
  return (
    <main>
      <div className='container'>
        <div className='home left'>
          <h2>
            Top Up <span>Mudah</span>.
          </h2>
          <h2>
            Transfer <span>Mudah</span>.
          </h2>
        </div>
        <div className='home right'>
          <a href='/register'>
            <button className='filled'>Register Sekarang</button>
          </a>
          <a href='/login'>
            <button>Login Sekarang</button>
          </a>
        </div>
      </div>
    </main>
  );
}
