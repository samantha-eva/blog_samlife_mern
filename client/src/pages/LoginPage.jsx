import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Divider, Inputbox, Logo } from "../components";
import Button from "../components/Button";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
  const user = {};
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //Pour mettre à jour l'état data en conséquence.
  const handleChange = (e) => {
    const [name, value] = e.target;

    setData({       //est la fonction qui met à jour l'état data.
      ...data,      //copie toutes les propriétés existantes de data.
      [name]: value, //met à jour la propriété spécifiée par name avec la nouvelle valeur saisie par l'utilisateur.
    });
  };

  const GoogleLogin = async () => {};

  const handleSubmit = async () => {};

  if (user.token) window.location.replace("/");

    return (
      <div className="w-full flex h-[100vh]">
        <div className="hidden md:flex flex-col gap-y-4 w-1/3 min-h-screen bg-black items-center justify-center">
          <Logo type="login" />
          <span className="text-xl font-semibold text-white">Welcome, back !</span>
        </div>

        <div className="flex w-full md:w-2/3 h-full
         bg-white dark:bg-gradient-to-b
         md:dark:bg-gradient-to-r from-black
          via-[#071b3e] to-black items-center px-10 md:px-20 lg:px-40">
            <div className="h-full flex flex-col 
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
                  onClick={() => GoogleLogin()}
                />
                <Divider label='ou continuer avec votre mail' />
                <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
                  <div className='flex flex-col rounded-md shadow-sm -space-y-px gap-5'>
                    <Inputbox 
                      type="email" 
                      label="Adresse mail" 
                      name="email" 
                      value ={data?.email} 
                      isRequired = {true}
                      placeholder="Votre adresse mail" 
                      onChange={handleChange} 
                    />

                    <Inputbox          
                      type="Password" 
                      label="Mot de passe" 
                      name="password" 
                      value ={data?.password} 
                      isRequired = {true}
                      placeholder="Votre mot de passe" 
                      onChange={handleChange} 
                    />
                  </div>

                  <Button
                      label="Connexion"
                      type="submit"
                      styles="group relative w-full flex 
                      justify-center py-2.5 2xl:py-3 px-4 
                      border border-transparent text-sm font-medium 
                      rounded-full text-white bg-black
                      dark:bg-rose-800 hover:bg-rose-700 
                      focus:outline-none focus:ring-2 
                      focus:ring-offset-2 
                      focus:ring-rose-500 mt-8"
                    />

                </form>

                <div className='flex items-center justify-center text-gray-600 dark:text-gray-300'>
                  <p>
                    Vous n'avez pas de compte?{" "}
                    <Link to='/sign-up' className='text-rose-800 font-medium'>
                      Inscrivez-vous
                    </Link>
                  </p>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
    
  };
  
  export default LoginPage;