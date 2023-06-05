import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './LoginRegister/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Portal from './Portal/Portal';
import Sidebar from './Portal/Sidebar';
import Topbar from './Portal/Topbar';
import Class from './Components/Class';
import Dashboard from './Components/Dashboard';
import Task from './Components/Task';
import Webcode from './Components/Webcode';
import Capstone from './Components/Capstone';
import Queries from './Components/Queries';
import Portfolio from './Components/Portfolio';
import Application from './Components/Application';
import Interviewtask from './Components/Interviewtask';
import Leave from './Components/Leave';
import Mock from './Components/Mock';
import Certificate from './Components/Certificate';
import Testimonial from './Components/Testimonial';
import Syllabus from './Components/Syllabus';
import { Placeholder } from 'react-bootstrap';
import Placement from './Components/Placement';
import Register from './LoginRegister/Register';
import Profile from './Profiledetails/Profile';
import Updateprofile from './Profiledetails/Updateprofile';
import Forget from './Password/Forget';
import Verification from './Password/Verification'
import ChangePassword from './Password/ChangePassword';
import { Userprovider } from './Context/Usercontext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Userprovider>


          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/portal" element={<Portal />}>
              <Route path="sidebar" element={<Sidebar />} />
              <Route path="topbar" element={<Topbar />} />
              <Route path="class" element={<Class />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="task" element={<Task />} />
              <Route path="webcode" element={<Webcode />} />
              <Route path="capstone" element={<Capstone />} />
              <Route path="queries" element={<Queries />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="application" element={<Application />} />
              <Route path="interviewtask" element={<Interviewtask />} />
              <Route path="leave" element={<Leave />} />
              <Route path="mock" element={<Mock />} />
              <Route path="certificate" element={<Certificate />} />
              <Route path="testimonial" element={<Testimonial />} />
              <Route path="syllabus" element={<Syllabus />} />
              <Route path="placement" element={<Placement />} />
              <Route path="profile" element={<Profile />} />
              <Route path="updateprofile/:id" element={<Updateprofile />} />
            </Route>
            <Route path="/forget" element={<Forget />} />
            <Route path="/verification/:id" element={<Verification />} />
            <Route path="/ChangePassword/:id" element={<ChangePassword />} />
          </Routes>
        </Userprovider>

      </BrowserRouter>

    </div>
  );
}

export default App;
