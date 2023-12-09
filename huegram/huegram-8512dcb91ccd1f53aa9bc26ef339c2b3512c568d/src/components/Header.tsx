
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">HueGram</h1>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:border-cyan-500"
        />
      </div>
    </header>
  );
};

export default Header;
