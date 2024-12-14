import React from 'react';

const SigninPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left Partition */}
      <div className="w-[50%] flex bg-black flex-col justify-center items-center relative p-5">
        <div className="absolute top-[38px] left-[60px] w-[198px] h-[41px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/7c16/9e41/a143a0a2f8846b69bdcd00ce27e1934f?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1kIMRw7wKAkaXBKQRTKhvBigVioSqyanRYqHCkNPf3uqBD1ruLN-o0BMDLH~YT~F1r1qFoxigSdrgYZXNf2jr7o~83YwVZpE3X3hgXWBOSU1byCsuOw7cWm93r3KXvxTqIIW6UiIdTniZNaT69PzHeghQ4GwHm1NQkisXpVxG9pR50KSyDvK4uBbcWjwaUGcl10K0Oh1Yg6zhlqIDAiJ2O3-6bJtH4aEVM8OX4eTOvXWgHEQtUyrBuHfvHuZ1Bq30q78auSX9LWS209bUqMvliuEC5O7As0lYTxWCxp~vUZeRXIKV9S7cNw9TAcLzwj-Erxes0mg2EXy0O8VxLwWQ__" // Replace with your logo path
            alt="Company Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left absolute left-[80px] w-[375px] ">
        <p className="text-white font-medium text-[40px] leading-[55px]">
  <span className="block">Supercharge Your</span>
  <span className="block">Productivity with</span>
  <span className="block mb-2">AI Agents</span>
</p>
<p className="text-[#B4B1B1] text-[20px] font-poppins font-light leading-normal">     
  <span className="block">Join us and transform the way you</span>
  <span className="block">work-smarter, faster, and better</span>
</p>
        </div>
      </div>

      {/* Right Partition */}
      <div className="w-[50%] bg-lightGray flex flex-col justify-center items-center">
        <div className="w-[407px] h-[351px] bg-customGray rounded-xl shadow-md ">
            <div className='p-[24px] w-full h-full'>
            <h2 className="text-[24px] text-white font-medium">Sign up</h2>
          <div className=' '>
          <p className="text-[14px] text-[#C9C9C9] mt-[6px] leading-normal">
            Create a free Polymaths.AI account <span className="text-cpurple cursor-pointer"></span>
          </p>
          </div>
          
          <div className="mb-4 w-full">
            <label htmlFor="email" className="sr-only">Email</label>
            <div className="relative mt-[32px]">
              <input
                type="email"
                id="email"
                placeholder="name@example.com"
                className="w-full border text-[14px] border-gray-300 bg-customGray text-lightGray2 rounded px-4 py-[13px] focus:outline-none focus:ring-2 focus:ring-borderGray"
              />
              <span className="absolute inset-y-0 right-4 flex items-center text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <button className="w-full text-[14px] text-sendGray flex items-center justify-center bg-white py-[13px] px-6 rounded mt-[17px]">
          <img src="/mi_email.svg" alt="Google" className="w-[20px] h-[20px] mr-[8px] " />
            Send me a login link
          </button>
          <div className='mt-[13px] mb-[13px] flex items-center justify-center'>
            <div className='border-t flex-grow border-lightGray1'/>
            <span className='flex items-center text-[14px] text-lightGray1 justify-center mx-4'>or continue with</span>
            <div className='border-t flex-grow border-lightGray1'/>
          
          </div>
          
          <button className="w-full text-[14px] flex items-center justify-center bg-customGray border text-[#F6F6F6] border-gray-300  py-[15px] rounded transition focus:outline-none focus:ring-2 focus:ring-borderGray">
            <img src="/Google.svg" alt="Google" className="w-[20px] h-[20px] mr-[8px] " />
            Google
          </button>

            </div>
          
        </div>
      
      </div>
    </div>
  );
};

export default SigninPage;
