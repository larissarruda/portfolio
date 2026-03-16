import cutiepie from '../assets/51.png';
import CV from '../assets/CV.pdf';
import { DownloadIcon, Mail} from "lucide-react"

const Hero = ({darkMode}) => {
    
    const lightTheme = {
    textPrimary: 'text-gray-900',
    textSecondary: 'text-gray-700',
    buttonSecondary: 'text-gray-800 border-2 border-orange-500 hover:text-white',
    decorativeCircle: 'bg-orange-400 opacity-20'
    }
    /* verde: b6ff00  azul claro: #013ff6 azul escuro: #04045e meio preto: #242834*/
    const darkTheme = {
    textPrimary: 'text-white',
    textSecondary: 'text-gray-300',
    buttonSecondary: 'text-white border-2 border-[#b6ff00] hover:bg-[#b6ff00] hover:text-[#04045e]',
    decorativeCircle: 'bg-[#04045e] opacity-10'
    }

    const theme = darkMode ? darkTheme : lightTheme;

  return (
    /* relative overflow-hidden lg:h-130 md:h-120 h-auto flex items-center */
    <div className='relative overflow-hidden lg:h-130 lg:px-65 lg:pt-30 md:h-150 flex flex-col lg:justify-center'>
        <section
        id='home'
        data-aos="fade-up"
        data-aos-delay="250"
        className='body-font z-10'
        >
            <div className='container mx-auto flex px-4 sm:px-8 lg:px-14 sm:py-80 py-18 lg:py-30 flex-col
            lg:flex-row items-center justify-center lg:justify-between' >
                <div className='lg:w-1/2 w-full flex flex-col items-center
                lg:items-start text-center lg:text-left mb-12 lg:mb-0   '>
                    
                    <h1 className={`title-font text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${theme.textPrimary}`}
                    data-aos="fade-up"
                    data-aos-delay="500"
                    >
                        Social Media & Copywriter
                    </h1>
                    <p className={ `mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary} text-justify`}
                    data-aos="fade-up"
                    data-aos-delay="600"
                    >
                        Te ajudo a impulsionar seu negócio, criando experiências digitais envolventes e personalizadas que encantam seus clientes e elevam sua marca a novos patamares.
                    </p>
                    {/* Buttons */}
                    <div className='w-full pt-4 sm:pt-6'>
                        <div className='flex flex-col sm:flex-row justify-center
                        lg:justify-start gap-3 sm:gap-4 '
                        data-aos="fade-up"
                        data-aos-delay="700"
                        >
                            <a href={CV} className='w-full sm:w-auto'>
                                <button className='w-full sm:w-auto inline-flex
                                items-center justify-center text-[#04045e] bg-[#b6ff00] border-0
                                py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(0,0,0,0.7)] rounded-full
                                text-base sm:text-lg font-semibold transition-all duration-300 transform'>
                                    <DownloadIcon className='w-4 h-4 sm:h-5 sm:w-5 mr-2'/>
                                    Download CV
                                </button>
                            </a>
                            <a href="#contact" className='w-full sm:w-auto'
                            >
                                <button className={`w-full sm:w-auto inline-flex
                                items-center ${theme.buttonSecondary} justify-center text-[#04045e] bg-[#013ff6] border-0
                                py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgb(0,0,0,0.7)] rounded-full
                                text-base sm:text-lg font-semibold transition-all duration-300 transform`}>
                                    <Mail className='w-4 h-4 sm:w-5 sm:h-5 mr-2'/>
                                    Contact Me
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
                {/* Image */}
                <div
                className='hidden md:flex lg:w-80 w-full max-w-md lg:max-w-lg mt-9
                lg:mt-0 flex justify-center lg:justify-end items-center'
                /* data-aos="fade-up"
                data-aos-delay="400" */
                >
                    <div className='relative -w-4/2 sm:w-4/2 lg:w-full'>
                    <div className='relative overflow-hidden justify-end flex'>
                        <img
                        src={cutiepie}
                        alt='Hero image'
                        className='w-full h-auto object-cover animate-slow-spin rounded-lg'
                        /* data-aos="fade-left"
                        data-aos-delay="700" */
                        />
                        </div>

                    </div>
                </div>
                
            </div>
            <div className={`absolute -top-20 -left-20 w-40 h-40
            sm:w-64 sm:h-64 ${theme.decorativeCircle} rounded-full
            mix-blend-multiply filter blur-3xl opacity-10
            animate-pulse delay-1000 hidden sm:block`}>
            </div>
        </section>
    </div>
  )
}

export default Hero