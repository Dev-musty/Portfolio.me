
import Divider from './Divider'
import { portfolio_data } from '../../data'

const ConnectSection = () => {
  return (
    <>
      <div className="mt-[50px]">
          <h2 className="text-center  md:text-[60px]">Let's connect</h2>
          <div className="social-links flex justify-center gap-[10px] mt-[15px]">
            <a href={portfolio_data.user_details.email} className=" md:text-[30px]" target="_blank" rel="noopener noreferrer">
              <span className="slash">//</span>Email
            </a>
            <a href={portfolio_data.user_details.whatsapp} className="md:text-[30px]" target="_blank" rel="noopener noreferrer">
              <span className="slash">//</span>WhatsApp
            </a>
          </div>
          <Divider />
        </div>
    </>
  )
}

export default ConnectSection

