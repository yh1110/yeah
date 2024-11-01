export const Announce = () => {
  return (
    <div className="bg-primary-300 rounded-lg shadow-md p-6 mb-8">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
          alt="Yay! app icon"
          className="w-16 h-16 rounded-xl"
        />
        <div>
          <h2 className="text-xl font-semibold text-text-100">Yeah!</h2>
          <p className="text-sm text-text-300">好きでつながるバーチャルワールド</p>
        </div>
      </div>
      <div className="flex space-x-4 mb-4">
        <img
          src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
          alt="App Store"
          className="h-10"
        />
        <img
          src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
          alt="Google Play"
          className="h-10"
        />
      </div>
      <div className="bg-gradient-to-r from-secondary-100 to-secondary-200 text-text-100 p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Ver. 0.1</h3>
        <p>アップデート情報</p>
      </div>
    </div>
  );
};
