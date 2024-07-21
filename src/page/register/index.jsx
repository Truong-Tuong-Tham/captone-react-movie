import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import '../../../src/index.css'
import { userService } from '../../services/userService';
import { message } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
const Register = () => {
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
  const navigate=useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt: '',
      maNhom: "GP00",
      hoTen: '',
    },
    onSubmit: (values) => {
    userService.postRegister(values) 
    .then((res)=>{
      navigate('/auth/login');
      message.success('Đăng kí thành công');
console.log(res)
      })
      .catch((err)=>{
        console.log(err)
        message.error('Đăng kí thất bại');
      })
      console.log(values);
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
      email: yup
        .string()
        .email('Email không hợp lệ')
        .required('Email không được để trống'),
      soDt: yup
        .string()
        .matches(/^[0-9]{10,11}$/, 'Số điện thoại không hợp lệ')
        .required('Số điện thoại không được để trống'),
      hoTen: yup
        .string()
        .required('Họ và tên không được để trống'),
    }),
  });

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one" />
        <div className="form-container">
          <img
            src="https://codetheworld.io/wp-content/uploads/2024/06/ghost.png"
            className="illustration"
            alt="illustration"
          />
          <h2 className="opacity">REGISTER</h2>
          <form  onSubmit={formik.handleSubmit}>
          {formik.errors.taiKhoan && <div className='h-1 relative'>{formik.errors.taiKhoan}</div>}
            <input
              name="taiKhoan"
              type="text"
              placeholder="TÀI KHOẢN"
              value={formik.values.taiKhoan}
              onChange={formik.handleChange}
            />
          
          {formik.errors.matKhau && <div className='h-1'>{formik.errors.matKhau}</div>}
            <input
              name="matKhau"
              type="text"
              placeholder="MẬT KHẨU"
              value={formik.values.matKhau}
              onChange={formik.handleChange}
            />
          
          {formik.errors.email && <div className='h-1'>{formik.errors.email}</div>}
            <input
              name="email"
              type="email"
              placeholder="MAIL"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
           
           {formik.errors.soDt && <div className='h-1 w-96'>{formik.errors.soDt}</div>}
            <input
              name="soDt"
              type="text"
              placeholder="SỐ PHONE"
              value={formik.values.soDt}
              onChange={formik.handleChange}
            />
            
            {formik.errors.hoTen && <div className='h-1'>{formik.errors.hoTen}</div>}
            
            <input
              name="hoTen"
              type="text"
              placeholder="HỌ VÀ TÊN"
              value={formik.values.hoTen}
              onChange={formik.handleChange}
            />
           
            <button className='mt-5' id="btn">ĐĂNG KÍ </button>
          </form>
          <div className="register-forget opacity">
          <NavLink to='/auth/login'
            >ĐĂNG Nhập</NavLink>
          </div>
        </div>
        <div className="circle circle-two" />
      </div>
      <div className="theme-btn-container">
      </div>
    </section>
  );
};

export default Register;
