import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import 'tailwindcss/tailwind.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
            <div className="block pl-2 font-semibold text-xl self-start text-gray-700" style={{ fontSize: '2em' }}>
                <h2 className="leading-relaxed">Masuk ke Google untuk mengakses layanan MatchUp</h2>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="flex justify-center mt-8 border-t border-gray-200 pt-8" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}> 
                <GoogleLogin
                  onSuccess={credentialResponse => {
                    var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
                    console.log(credentialResponseDecoded);
                    window.location.href = 'https://18221134-ii3160-matchup-free.azurewebsites.net/docs';
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App

