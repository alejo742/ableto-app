'use client'
import React, { useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, User } from 'firebase/auth'
import { auth } from '@/shared/firebaseConfig'

enum SignInStatus {
  LOGGED_IN,
  LOGGED_OUT,
  ERROR
}

export default function Page() {
  const [status, setStatus] = useState<SignInStatus>(SignInStatus.LOGGED_OUT)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setStatus(SignInStatus.LOGGED_IN)
      }
      setUser(user)
    })

    return unsubscribe
  }, [])

  return (<>
    <div className='bg-gradient-to-tr from-[#61D8DE] to-[#5E17EB] w-screen min-h-screen flex justify-center items-center'>
      <div className='h-max max-w-96 w-full bg-white text-black rounded-md flex flex-col z-20'>
        <h1 className='text-2xl font-bold text-center mt-8'>
          Why Login?
        </h1>

        <div className='w-max max-w-full pl-8 text-lg my-4'>
          <p>
            Logging in allows you to:
          </p>
          <ul className='list-disc w-max text-wrap max-w-full pl-4'>
            <li>Save your progress</li>
            <li>Access all of our braille lessons</li>
            <li>Tailor lessons to your strengths and weaknesses</li>
          </ul>
        </div>

        {status !== SignInStatus.LOGGED_OUT &&
          <p className='text-center'>
            {status === SignInStatus.LOGGED_IN ? `Logged in as ${user?.displayName ?? user?.email ?? user?.uid ?? 'a user'}` : 'An error occurred, please try again' }
          </p>
        }
        
        <button
          className='mb-8 bg-gradient-to-tr from-[#61D8DE] to-[#5E17EB] text-white font-bold w-max px-4 py-2 rounded-md mx-auto'
          onClick={async () => {
            try {
              if (user) {
                await signOut(auth)
                setStatus(SignInStatus.LOGGED_OUT)
              } else {
                const provider = new GoogleAuthProvider()
                await signInWithPopup(auth, provider)
              }
            } catch (err) {
              console.error(err)
              setStatus(SignInStatus.ERROR)
            }
          }}
        >
          {user === null ? 'Sign in with Google' : 'Sign out'}
        </button>
      </div>
      <div className='absolute top-0 left-0 w-screen h-screen overflow-hidden'>
        <svg
          width="20vw"
          height="20vw"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            top: `10%`,
            left: `-10%`,
            transform: `rotate(45deg)`,
            opacity: 0.5,
          }}
        >
          <rect width="100" height="100" fill="white" />
        </svg>
        <svg
          width="20vw"
          height="20vw"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            bottom: `10%`,
            left: `5%`,
            transform: `rotate(25deg)`,
            opacity: 0.5,
          }}
        >
          <rect width="100" height="100" fill="white" />
        </svg>
        <svg
          width="25vw"
          height="25vw"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            top: `40%`,
            right: `-17%`,
            transform: `rotate(60deg)`,
            opacity: 0.5,
          }}
        >
          <rect width="100" height="100" fill="white" />
        </svg>
        <svg
          width="10vw"
          height="10vw"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            top: `10%`,
            right: `10%`,
            transform: `rotate(30deg)`,
            opacity: 0.5,
          }}
        >
          <polygon points="50,0 0,100 100,100" fill="white" />
        </svg>
        <svg
          width="250"
          height="250"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            bottom: `30%`,
            left: `30%`,
            transform: `rotate(75deg)`,
            opacity: 0.5,
          }}
        >
          <polygon points="50,0 0,100 100,100" fill="white" />
        </svg>
        <svg
          width="250"
          height="250"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            bottom: `20%`,
            right: `20%`,
            transform: `rotate(25deg)`,
            opacity: 0.5,
          }}
        >
          <polygon points="50,0 0,100 100,100" fill="white" />
        </svg>
        <svg
          width="10vw"
          height="10vw"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{
            top: `10%`,
            left: `45%`,
            transform: `rotate(80deg)`,
            opacity: 0.5,
          }}
        >
          <polygon points="50,0 0,100 100,100" fill="white" />
        </svg>
      </div>
    </div>
  </>)
}
