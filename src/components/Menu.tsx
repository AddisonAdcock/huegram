const Menu = () => {
  return (
    <div className='flex flex-col p-8 bg-gradient-to-r from-purple-500 to-pink-500'>
      <div className='space-y-2'>
        <span className="block h-0.5 w-8 bg-white"></span>
        <span className="block h-0.5 w-8 bg-white"></span>
        <span className="block h-0.5 w-8 bg-white"></span>
      </div>
      <a href="" className="menulink text-white text-2xl my-4">Home</a>
      <a href="" className="menulink text-white text-2xl my-4">Search</a>
      <a href="" className="menulink text-white text-2xl my-4">Trending</a>
    </div>
  );
}

export default Menu;
