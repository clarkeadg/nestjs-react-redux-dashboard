import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks'
import { login } from '../redux/actions/auth'
import { FaSpinner } from "react-icons/fa";

export default function Login() {   
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useAppSelector((state:any) => state.auth.loading)
  const errorMessage = useAppSelector((state:any) => state.auth.errorMessage)
  const dispatch = useAppDispatch()

  const handleSubmit = () => {    
    dispatch(login(email, password))
  }
  
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-gray-100">      
      <div className="-mt-40 w-full sm:max-w-md px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        <div className="text-lg font-bold text-center mb-4">Login</div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <div>
              <label className="block font-medium text-sm text-gray-700" htmlFor="email">
                Email
            </label>
              <input disabled={loading?true:undefined} onChange={(e)=>{ setEmail(e.target.value)}} value={email} className="p-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" id="email" type="email" name="email" required autoFocus autoComplete="username"/>
          </div>

          <div className="mt-4">
              <label className="block font-medium text-sm text-gray-700" htmlFor="password">
                Password
            </label>
              <input disabled={loading?true:undefined} onChange={(e)=>{ setPassword(e.target.value)}} value={password} className="p-2 border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm block mt-1 w-full" id="password" type="password" name="password" required autoComplete="current-password"/>
          </div>

          { errorMessage && <div className="pt-4 text-center text-red-500">
              { errorMessage }
          </div> }

          <div className="flex items-center justify-end mt-4">                
              <button disabled={loading?true:undefined}  type="submit" className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ml-4">
                { loading && <span className="animate-spin"><FaSpinner/></span>}
                {!loading && <span>Log in</span> }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}