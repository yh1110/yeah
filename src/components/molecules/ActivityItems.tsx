import { FunctionComponent } from "react";

type ActivityItemsProps = {
  isActivies: boolean;
  userImageUrl: string;
  userName: string;
  userAction: string;
  replyText: string;
  postText: string;
  actionDate: string;
};

export const ActivityItems: FunctionComponent<ActivityItemsProps> = ({
  isActivies,
  userImageUrl,
  userName,
  userAction,
  replyText,
  postText,
  actionDate,
}) => {
  return (
    <div className="p-6 border-b border-border-300 flex justify-between ">
      <div className="flex items-start space-x-3">
        <img src={userImageUrl} alt="User avatar" className="w-10 h-10 rounded-full" />
        <div>
          <p className="flex items-center mb-3 text-sm text-text-200">
            <span className="font-semibold text-text-100">{userName}</span>
            {userAction}
          </p>
          {isActivies ? (
            <p className="text-text-200 mb-4 w-full break-all text-sm">{replyText}</p>
          ) : (
            <></>
          )}
          <div className="flex space-x-6">
            <p className="text-xs text-text-300 break-all ">{postText}</p>
          </div>
        </div>
      </div>
      <p className="text-xs text-text-300 min-w-[60px] text-right">{actionDate}</p>
    </div>
  );
};
