import { FunctionComponent } from "react";

export const AlbumPreview: FunctionComponent = () => {
  return (
    <div className=" w-full box-border grid dt:grid-cols-7 mb:grid-cols-6  gap-4  border-b border-border-300 tb:p-6 p-3">
      {[...Array(6)].map((_, i) => (
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
