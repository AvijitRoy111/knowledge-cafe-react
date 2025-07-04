import profile from '../../../images/profile.png'
const Navbar = () => {
    return (
       <div>
         <div className="flex justify-between py-3 mx-32 items-center">
            
            <h1 className='text-2xl font-semibold text-[#111111]'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
        <hr className="border border-solid border-[#919090] mx-32"/>
       </div>
    );
};

export default Navbar;