import { FunctionComponent } from "react";

type ProfileInfoItemProps = {
  itemName: string;
  itemAmounts: string;
  borderR?: string;
};

export const ProfileInfoItem: FunctionComponent<ProfileInfoItemProps> = ({
  itemName,
  itemAmounts,
  borderR,
}) => {
  return (
    <div className={`text-center flex-grow border-r-border-300 ${borderR} cursor-pointer`}>
      <p className="mb-2">{itemName}</p>
      <span className=" w-full box-border font-semibold ">{itemAmounts}</span>
    </div>
  );
};
