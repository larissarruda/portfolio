import React from 'react'
import instagram from '../assets/instagram-dark.svg';
import linkedin from '../assets/linkedin-dark.svg';
import vimeo from '../assets/vimeo-dark.svg';
import gmail from '../assets/email-dark.svg';

const Footer = () => {
    const socialIcons = [
      {icon: instagram, alt: 'Instagram', link: 'https://www.instagram.com/unfav_tunico/'},
      {icon: linkedin, alt: 'LinkedIn', link: 'https://www.linkedin.com/in/artur-schlichting/'},
      {icon: vimeo, alt: 'Vimeo', link: 'https://vimeo.com/unfav_tunico'},
      {icon: gmail, alt: 'Gmail', link: 'mailto:arturschlichting@gmail.com'},
    ];
  return (
    <div className='w-full py-4 px-3 sm:px-4 bg-[#013ff6] text-gray-300 font-bold text-xs'>
        <div className='container mx-auto grid grid-cols-3 items-center gap-3'>
            <p className='text-left'>© 2026 all rights reserved.</p>
            <div className='flex justify-center gap-4'>
                {socialIcons.map((icon, index) => (
                    <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer">
                        <img src={icon.icon} alt={icon.alt} className='w-6 h-6' />
                    </a>
                ))}
            </div>
            <p className='text-right font-style italic text-xs'>
             website designed by @{' '}
              <a href='https://github.com/larissarruda/' target='_blank' rel='noopener noreferrer' className='text-[#b6ff00] hover:text-white transition-colors'>
                larissarruda
              </a>
            </p>
        </div>
    </div>

  )
}

export default Footer