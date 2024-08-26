import hero from '../assets/hero-img.png'
import small from '../assets/small-screen.png'

const Hero = () => {
  return (
    <div className='m-0 p-0'>
        {/* Larger screen  */}
        <section className="h-[525px] bg-[#f0f2f5] flex-row hidden lg:flex w-full">
            <div className='flex justify-center items-center w-full md:w-1/2 '>
                <div>
                    <h1 className='font-[inter] text-center text-7xl font-semibold tracking-tight leading-[78px] text-[#1d2026]'>
                    Learn with expert <br /> <span className='ml-7'>anytime anywhere</span>
                    </h1>
                    <p className='text-2xl py-8 text-[#4e5566] ml-7'>
                    Our mision is to help people to find the best course <br />online and learn with expert anytime, anywhere.
                    </p>
                    <button className='bg-tutorPrimary text-white py-3 px-5 ml-7  rounded-sm' >
                        Create Account
                    </button>
                </div>
            </div>
            <div className='relative top-[-5px] w-full md:w-1/2 '>
                <img src={hero} alt="" />
            </div>
        </section>

        {/* Smaller screens  */}
        <section className="h-[500px] flex-col flex lg:hidden">
            <div className='relative top-[-5px] w-full '>
                <img src={small} alt=""  className='w-full md:h-[500px] '/>
            </div>
            <div className='flex justify-center items-center w-full bg-[#f0f2f5] '>
                <div>
                    <h1 className='font-inter text-center text-5xl font-semibold tracking-tight leading-[55px] text-[#1d2026]'>
                    Learn with expert <br /> <span className='ml-7'>anytime anywhere</span>
                    </h1>
                    <p className='text-2xl py-8 text-[#4e5566] ml-7'>
                    Our mision is to help people to find the best course online and learn with expert anytime, anywhere.
                    </p>
                    <button className='bg-tutorPrimary text-white py-2 px-7 ml-7  rounded-sm' >
                        Create Account
                    </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero