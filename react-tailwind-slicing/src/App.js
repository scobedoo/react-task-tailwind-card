import './App.css';
import cardImage from './assets/card-image.jpg';
import avatar from './assets/avatar.jpg';

function App() {
  return (
    <div className='mt-20 max-w-7xl mx-auto'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10'>
        {Array(10).fill().map((_, index) => (
          <div key={index}
            className='w-[360px] mx-auto rounded-[10px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out'>
            <div className='w-full h-[211px] overflow-hidden group'>
              <img
                src={cardImage}
                alt='Bahasa Indonesia'
                className='min-h-full object-center object-cover group-hover:scale-110 transition-transform duration-200'
              />
            </div>
            <div className='pt-[25px] pb-[28px] px-4'>
              <h3 className='text-[#092C4C] text-2xl font-bold'>Bahasa Indonesia</h3>
              <p className='mt-1.5 text-[#94A2B3] text-base'>Kelas | Sekolah Dasar</p>
              <div className='mt-[30px] flex items-center'>
                <div className='h-14 w-14 rounded-full overflow-hidden'>
                  <img src={avatar} alt='' className='min-h-full object-center object-cover' />
                </div>
                <div className='ml-[13px]'>
                  <p className='text-[#092C4C] text-xl font-semibold'>Cici Sang Putri</p>
                  <p className='mt-1.5 text-[#94A2B3]'>Guru SDN 02 Pekanbaru</p>
                </div>
              </div>
              <div className='mt-[30px] flex items-center justify-between'>
                <p className='text-[#092C4C] text-xl font-semibold'>Rp. 90.000</p>
                <a
                  href='#'
                  className='h-10 w-[120px] flex justify-center items-center text-[#003592] text-sm font-bold border-2 border-[#003592] rounded-[10px] hover:bg-[#003592] transition-all duration-200 ease-in-out hover:text-white'>
                  Lihat Kelas
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
