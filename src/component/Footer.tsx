import { Link } from 'react-router-dom'
import { portfolio_data } from '../../data'
const Footer = () => {
  return (
    <>
      <footer className='font-firacode mx-[15px] mt-[10px] text-[#E4E4E7] flex justify-between'>
        <div className='flex flex-col leading-[2]'>
          <h2 className='text-[15px] md:text-[30px]'>Quick links</h2>
          <Link className='cursor-pointer md:text-[22px]' to='/'>Home</Link>
          <Link className='cursor-pointer md:text-[22px]' to='/about'>About</Link>
          <Link className='cursor-pointer md:text-[22px]' to='/project'>Project</Link>
          <Link className='cursor-pointer md:text-[22px]' to='/contact'>Contact</Link>
        </div>
        <div className='flex flex-col leading-[2]'>
          <h2 className='text-[15px] md:text-[30px]'>Dev</h2>
          <a href={portfolio_data.user_details.github} className='md:text-[22px]'>Github</a>
        </div>
        <div className='flex flex-col leading-[2]'>
          <h2 className='text-[15px] md:text-[30px]'>Social</h2>
          <a href={portfolio_data.user_details.X} className='md:text-[22px]'>X</a>
          <a href={portfolio_data.user_details.linkedin} className='md:text-[22px]'>LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default Footer

