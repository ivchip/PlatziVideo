/* eslint-disable react/button-has-type */
import React from 'react';
import Footer from '../components/Footer';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <>
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form'>
          <input className='input__register' type='text' placeholder='Nombre' />
          <input className='input__register' type='text' placeholder='Correo' />
          <input className='input__register' type='password' placeholder='Contraseña' />
          <button className='button'>Registrarme</button>
        </form>
        <a href='/login'>Iniciar sesión</a>
      </section>
    </section>

    <Footer />
  </>
);

export default Register;
