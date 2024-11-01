import { GroupListItem } from "../../../molecules/GroupListItem";

const groupItems = [
  {
    groupImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
    name: "友達欲しい人集まれ",
    time: 5,
    category: "人間関係",
    members: "274",
    posts: "1,368",
  },
  {
    groupImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
    name: "スポーツの集い",
    time: 6,
    category: "スポーツ",
    members: "129",
    posts: "1,975",
  },
  {
    groupImageUrl: "https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD",
    name: "ゲーム友達募集",
    time: 6,
    category: "人間関係",
    members: "100",
    posts: "1,000",
  },
];

export const GroupList = () => {
  return (
    <div className="bg-primary-300 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 text-text-100">最近更新があったサークル</h2>
      <ul className="space-y-3">
        {groupItems.map((circle) => (
          <GroupListItem
            groupImageUrl={circle.groupImageUrl}
            name={circle.name}
            time={circle.time}
            category={circle.category}
            members={circle.members}
            posts={circle.posts}
          />
        ))}
      </ul>
    </div>
  );
};
