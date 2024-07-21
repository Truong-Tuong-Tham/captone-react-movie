import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../../../src/index.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { userService } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { postLoginAction } from '../../redux/user/userSlice';
import { Button } from 'antd/es/radio';
const Login = () => {
  useEffect(() => {
    const themes = [
      {
        background: '#1A1A2E',
        color: '#FFFFFF',
        primaryColor: '#0F3460'
      },
      {
        background: '#461220',
        color: '#FFFFFF',
        primaryColor: '#E94560'
      },
      {
        background: '#192A51',
        color: '#FFFFFF',
        primaryColor: '#967AA1'
      },
      {
        background: '#F7B267',
        color: '#000000',
        primaryColor: '#F4845F'
      },
      {
        background: '#F25F5C',
        color: '#000000',
        primaryColor: '#642B36'
      },
      {
        background: '#231F20',
        color: '#FFF',
        primaryColor: '#BB4430'
      }
    ];
    
    const root = document.querySelector(':root');
    const btnContainer = document
    .querySelector('.theme-btn-container');
    
    const setTheme = (theme) => {
      root.style.setProperty('--background', theme.background);
      root.style.setProperty('--color', theme.color);
      root.style.setProperty('--primary-color', theme.primaryColor);
      root.style.setProperty('--glass-color', theme.glassColor);
    };
    
    const displayThemeButtons = () => {
      btnContainer.replaceChildren();
    
      themes.forEach((theme) => {
        const div = document.createElement('div');
        div.className = 'theme-btn';
        div.style.cssText = `background: ${theme.background}; width: 45px; height: 35px`;
        div.addEventListener(
          'click',
          () => setTheme(theme),
        );
        btnContainer.appendChild(div);
      });
    };
    
  displayThemeButtons();  
  }, []);
const dispacth=useDispatch();
const navigate=useNavigate();
   const loginForm = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
    },
    onSubmit: (values) => {
      // let promise =axios({
      // method:'POST',
      // url:'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      // data: values,
      // headers: {
      //   TokenCybersoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NyIsIkhldEhhblN0cmluZyI6IjE1LzEyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczNDIyMDgwMDAwMCIsIm5iZiI6MTcwNTU5NzIwMCwiZXhwIjoxNzM0MzY4NDAwfQ.6KzwosGeCdFyoJDkANd3FzSA5C_iSLO1L8Q903zqZ44'  
      // }
      // })
      console.log(values);
      userService.postLogin(values)
      
      .then((res)=>{
      navigate('/');
      message.success('Đăng nhập thành công');
console.log(res.data.content)
dispacth(postLoginAction(res.data.content))
      })
      .catch((err)=>{
        console.log(err)
        message.error('Đăng nhập thất bại');
      })
    },
    validationSchema: yup.object().shape({
      taiKhoan: yup
        .string()
        .email('Tài khoản phải là một email hợp lệ')
        .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Tài khoản phải là một email Gmail hợp lệ')
        .required('Tài khoản không được để trống'),
      matKhau: yup
        .string()
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .matches(/[A-Z]/, 'Mật khẩu phải có ít nhất một chữ in hoa')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Mật khẩu phải có ít nhất một ký tự đặc biệt')
        .required('Mật khẩu không được để trống'),
    }),
  });

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle  circle-one" />
        <div className="form-container">
          <img src="https://codetheworld.io/wp-content/uploads/2024/06/ghost.png" className="illustration" alt="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form onSubmit={loginForm.handleSubmit}>
            <input
             id='nhap'
              type="text"
              name="taiKhoan"
              placeholder="USERNAME"
              value={loginForm.values.taiKhoan}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            />
            {loginForm.errors.taiKhoan && loginForm.touched.taiKhoan && <div>{loginForm.errors.taiKhoan}</div>}
            <input
              id='nhap'
              type="password"
              name="matKhau"
              placeholder="PASSWORD"
              value={loginForm.values.matKhau}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            />
            {loginForm.errors.matKhau && loginForm.touched.matKhau && <div>{loginForm.errors.matKhau}</div>}
            <button id='btn'>ĐĂNG NHẬP</button>
          </form>
         
          <div className="register-forget opacity">
            <NavLink  to='/auth/register'
            >ĐĂNG KÍ</NavLink>
             <NavLink  to=''
            >QUÊN MẬT KHẨU</NavLink> 
          </div>
        </div>
        <div  className="circle circle-two" />
      </div>
      <div className="theme-btn-container">
      </div>
    </section>
  );
};

export default Login;
