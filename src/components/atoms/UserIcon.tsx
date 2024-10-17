import { FunctionComponent } from "react";

type UserIconProps = {
  imageUrl: string;
  alt: string;
};

export const UserIcon: FunctionComponent<UserIconProps> = ({ imageUrl, alt }) => {
  return (
    <div id="avatar" className=" flex-shrink-0 -mt-20">
      <img className="h-24 w-24 rounded-full object-cover shadow-lg" src={imageUrl} alt={alt} />
    </div>
  );
};
