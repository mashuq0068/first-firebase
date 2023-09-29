import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <>
        <div style={{
            padding:"40px"
        }}>
          <div style={{
              display:'flex',
              gap:"20px",
          }} >
          <Link style={{
          
            background:"blue",
            padding:"10px",
            color:"white"
          }} to='/'>Home</Link>
            <Link style={{
        
            background:"blue",
            padding:"10px",
            color:"white"
          }} to='/login'>Login</Link>

          </div>
            <div style={{
                margin:"45px"
            }}>
                This is home

            </div>
        </div>
        <Outlet></Outlet>
        </>
        
    );
};

export default Home;