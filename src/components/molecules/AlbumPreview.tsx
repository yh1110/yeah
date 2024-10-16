import { FunctionComponent } from "react";

export const AlbumPreview: FunctionComponent = () => {
  return (
    <div className=" w-full box-border grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-b border-border-300 p-6">
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className=" w-full box-border aspect-square bg-gray-200 rounded-lg overflow-hidden"
        >
          {/* #TODO リファクタリング */}
          <img
            src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
            alt={`Post ${i + 1}`}
            width={100}
            height={100}
            className=" box-border w-full h-full object-cover"
          />
        </div>
      ))}
      <div className=" w-full box-border aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="  text-2xl text-gray-400">...</span>
      </div>
    </div>
  );
};
