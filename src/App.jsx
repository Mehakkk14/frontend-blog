
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header.jsx';
import { Footer } from './components/footer/Footer.jsx';
import { Dashboard } from './components/dashboard/Dashboard.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Pagenotfound } from './components/pagenotfound/Pagenotfound.jsx';
import { Try } from './components/try/Try.jsx';
import { Contactlist } from './components/contactlist/Contactlist.jsx';
import { Edit } from './components/edit/Edit.jsx';
import { Addblog } from './components/addblog/Addblog.jsx';
import { Signup } from './components/signup/Signup.jsx';
import { Login } from './components/login/Login.jsx';



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="try" element={<Try />} />
          <Route path="add-blog" element={<Addblog />} />
          <Route path="contact-list" element={<Contactlist />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
