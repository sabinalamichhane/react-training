
import './App.css';
import React from "react";
import Toolbar from './component/navigation/toolbar';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import About from './component/pages/homepage/About';
// import {Formik,Form,Field,ErrorMessage} from 'formik'
// import * as yup from 'yup'

// const schemn=yup.object().shape({
//   name:yup.string().required('name is required'),
//   email:yup.string().required('email is required'),
//   password:yup.string().required('email is required'),
//   conform_password:yup.string().required('email is required')
// })
function App(){
  return (
    <div  >
      <Router>

      <Toolbar />
      {/* {Show?<sidebar/>:""} */}
      <layout/>
      <Routes>
        <Route path='/about' exact elements={<About />}/>
      </Routes>
      <footer/>
      {/* <Formik 
      initialValues={{
        name:'',
        email:'',
        password:'',
        conform_password:''
      }}
      validationSchema={schemn}
      onSubmit={val=>{
        console.log(val)
      }}
      >
        {({handleSubmit})=>{
          return <Form onSubmit={handleSubmit}>
            <div className='input-block'>
              <label>Name : </label>
              <Field type='text' placeholder='enter your name' name='name' className='border border-black' />
            </div>
             
             <div>
            <div className='input-block'>
              <label>Email : </label>
              <Field type='email' placeholder='enter your email' name='email' className='border border-black' />
            </div>

            <div className='input-block'>
              <label>Password : </label>
              <Field type='password' placeholder='enter your password' name='password' className='border border-black' />
            </div>

            <div className='input-block'>
              <label>Conform_Password : </label>
              <Field type='password' placeholder='Conform your password' name='conform_password' className='border border-black' />
            </div>

              <ErrorMessage name='name' component={'div'} />
              <ErrorMessage name='email' component={'div'} />
              <ErrorMessage name='password' component={'div'} />
              <ErrorMessage name='conform_password' component={'div'} />

            </div>
            <button className='btn' type="submit">login</button>

          </Form>
        }}

      </Formik> */}
</Router>
    </div>

  )
}
export default App;
