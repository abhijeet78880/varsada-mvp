import { useUserStore } from "../../store/useStore"

export default function Login() {

  const { isLogedIn, setIsLogedIn,isLoginSkipped,setIsLoginSkipped } = useUserStore();

  return (
    <>
      <div>
        <div className="h-[calc(100vh-76px)] bg-red-50 relative">
          <img src="/image/ban1.png" alt="banner" className="h-full object-cover filter brightness-75" />
          <div className="bg-[rgba(255,255,255,0.3)] absolute top-0 right-0 h-[100%] backdrop-blur-md flex justify-center items-center sm:w-[40dvw] sm:max-w-[600px]">

            <div className="flex flex-col gap-8 justify-center items-center h-[100%] text-black mx-[50px]">
              <h3 className="mb-4">Welcome To Varsada</h3>
              <div className="w-full flex flex-col gap-4 body1">
                <label htmlFor="input">
                  Login using email or phone
                  <input type="text" name="" id="" className="w-full bg-transparent border-2 border-black p-2 rounded-md placeholder-gray-700 outline-white"
                    placeholder="Enter Email or Phone" />
                </label>
                <label htmlFor="input" className="flex flex-col">
                  Enter OTP
                  <div className="flex">
                    <input type="text" name="" id="" className="bg-transparent border-2 border-black p-2 rounded-md w-[90%] placeholder-gray-700 outline-white"
                      placeholder="- - - -" />
                    <button className="btn-primary2 whitespace-nowrap ml-4">Get OTP</button>
                  </div>
                </label>
              </div>
              <div className="w-full my-4">
                <button className="w-full btn-secondary subtitle1 text-white" onClick={() => setIsLogedIn(!isLogedIn)}>Login</button>
                <button className="w-full subtitle1 my-4" onClick={() => setIsLoginSkipped(!isLoginSkipped)}>skip</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}