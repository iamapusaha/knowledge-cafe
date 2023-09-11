import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='container mx-auto mt-12 '>
            <div className='flex justify-between items-center'>
                <h1 className='text-4xl font-bold '>knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
            <div className='my-7'>
                <hr />
            </div>
        </header>
    );
};

export default Header;