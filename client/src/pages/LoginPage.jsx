import { useGoogleLogin } from "@react-oauth/google";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Divider, Inputbox, Logo } from "../components";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
  const user = {};

  if (user.token) window.location.replace("/");

    return (
      <div className="w-full h-[100vh]">
        <div className="hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen bg-black items-center justify-center">
          <Logo type="login" />
          <span className="text-xl font-semibold text-white">Welcome, back !</span>
        </div>

        <div className="flex w-full md:w-2/3 h-full
         bg-white dark:bg-gradient-to-b
         md:dark:bg-gradient-to-r from-black
          via-[#071b3e] to-black items-center px-10 md:px-20 lg:px-40">
            <div className="w-full flex flex-col 
            items-center justify-center py-12 px-4 
            sm:px-6 lg:px-8">
              <div className="block mb-10 md:hidden">
                <Logo />
              </div>

              <div className="max-w-md w-full space-y-8">
                <div className="">
                  <h2 className="mt-6 text-center text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">Connectez-vous</h2>
                </div>

                <Button
                  label= "Continuer avec un compte google"
                  icon={<FcGoogle className='' />}
                  styles='w-full flex flex-row-reverse gap-4 
                  bg-white dark:bg-transparent text-black 
                  dark:text-white px-5 py-2.5 rounded-full
                  border border-gray-300'
                  onClick={() => {}}
                />
                <Divider label='ou continuer avec votre mail' />
                <form className='mt-8 space-y-6'>
                  <div className='flex flex-col rounded-md shadow-sm -space-y-px gap-5'>
                   <Inputbox />
                  </div>
                </form>

              </div>
            </div>
        </div>
      </div>
    )
    
  };
  
  export default LoginPage;