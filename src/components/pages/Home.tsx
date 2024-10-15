import React from "react";
import {
  Search,
  GalleryVerticalEnd,
  Bell,
  MessageCircle,
  Users,
  Image,
  List,
  Type,
  Video,
  Smile,
  CircleDot,
} from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-primary-500">
      <header className="bg-primary-300 border-b shadow-sm border-border-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-secondary-300">Yeah!</h1>
          <div className="relative flex-grow max-w-xl mx-4">
            <input
              type="text"
              placeholder="検索"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-primary-100 focus:outline-none focus:ring-2 focus:ring-secondary-300 bg-primary-100"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <nav className="flex items-center space-x-7">
            <button className="text-text-300 hover:text-secondary-300 flex items-center">
              <GalleryVerticalEnd className="h-5 w-5" />
              <span className="">タイムライン</span>
            </button>
            <button className="text-text-300 hover:text-secondary-300 flex items-center">
              <Users className="h-5 w-5" />
              <span>サークル</span>
            </button>
            <button className="text-text-300 hover:text-secondary-300 flex items-center">
              <MessageCircle className="h-5 w-5" />
              <span>チャット</span>
            </button>
            <button className="text-text-300 hover:text-secondary-300 flex items-center">
              <Bell className="h-5 w-5" />
              <span>通知</span>
            </button>
            <div className="flex items-center">
              <img
                src="./neko.jpg"
                alt="User avatar"
                className="w-9 h-9 object-cover rounded-full  mx-2"
              />
              <span className="text-text-100">neon</span>
            </div>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-8">
          <div className="w-2/3">
            <div className="bg-primary-300 rounded-lg shadow-md p-6 mb-8">
              <div className="text-sm text-text-300 mb-2">ホーム ＞ フォロー中のタイムライン</div>

              {/* #TODO useFormを使ってtextareaの監視 */}
              <textarea
                id="auto-resizing-textare"
                placeholder="気軽につぶやいてみよう！"
                className="w-full p-3 border border-primary-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-300 resize-none break-words white-space-pre-wrap overflow-hidden h-32 bg-primary-100"
              />
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                    "Aa",
                  ].map((text, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        index === 0
                          ? "border border-blue-500 text-blue-500"
                          : "border text-text-300"
                      }`}
                    >
                      {text}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <button className="p-2 text-text-300 hover:text-secondary-300 rounded-full hover:bg-pink-100">
                      <Image className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-text-300 hover:text-secondary-300 rounded-full hover:bg-pink-100">
                      <List className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-text-300 hover:text-secondary-300 rounded-full hover:bg-pink-100">
                      <Type className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-text-300 hover:text-secondary-300 rounded-full hover:bg-pink-100">
                      <Video className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-text-300 hover:text-secondary-300 rounded-full hover:bg-pink-100">
                      <Smile className="h-5 w-5" />
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-secondary-100 text-text-100 rounded-full hover:bg-secondary-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    投稿
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-primary-300 rounded-lg shadow-md">
              <div className="flex border-b border-border-300 p-4">
                <button className="text-secondary-300 font-semibold border-b-2 border-secondary-300 pb-2 mr-4">
                  フォロー中
                </button>
                <button className="text-text-300 font-semibold pb-2">オープン</button>
              </div>
              <div className="p-4 border-b border-border-300">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-text-100">ユーザー名</h3>
                    </div>
                    <p className="text-text-200 mt-3 w-full break-all">
                      投稿内容がここに表示されます。投稿内容がここに表示されます。投稿内容がここに表示されます。投稿内容がここに表示されます。投稿内容がここに表示されます。投稿内容がここに表示されます。testPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPosttestPost
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-border-300">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-text-100">ユーザー名</h3>
                    </div>
                    <p className="text-text-200 mt-3">投稿内容がここに表示されます。</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-border-300">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center">
                      <h3 className="font-semibold text-text-100">ユーザー名</h3>
                    </div>
                    <p className="text-text-200 mt-3">投稿内容がここに表示されます。</p>
                  </div>
                </div>
              </div>
              {/* 他の投稿も同様に追加 */}
            </div>
          </div>
          <div className="w-1/3">
            <div className="bg-primary-300 rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src="https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD"
                  alt="Yay! app icon"
                  className="w-16 h-16 rounded-xl"
                />
                <div>
                  <h2 className="text-xl font-semibold text-text-100">Yay!</h2>
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
                {/* <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-lg"> */}
                <h3 className="text-xl font-bold mb-2">Ver. 3.53</h3>
                <p>アップデート情報</p>
              </div>
            </div>
            <div className="bg-primary-300 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4 text-text-100">最近更新があったサークル</h2>
              <ul className="space-y-4">
                {[
                  {
                    name: "友達欲しい人集まれ",
                    time: "5分前",
                    category: "人間関係",
                    members: "274人",
                    posts: "1,368投稿",
                  },
                  {
                    name: "スポーツの集い",
                    time: "6分前",
                    category: "スポーツ",
                    members: "129人",
                    posts: "1,975投稿",
                  },
                  {
                    name: "ゲーム友達募集",
                    time: "6分前",
                    category: "人間関係",
                    members: "100人",
                    posts: "1,000投稿",
                  },
                ].map((circle, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <img
                      src={`https://placeholder.pics/svg/256/ADADAD-ADADAD/ADADAD-ADADAD`}
                      alt="Circle avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-text-200">{circle.name}</h3>
                      <p className="text-sm text-text-300">最終更新: {circle.time}</p>
                      <div className="flex items-center text-xs text-text-300 mt-1">
                        <CircleDot color="#3ECF8E" size="10px" />
                        <span className=" text-tag-100 px-1 py-1 rounded mr-2">
                          {circle.category}
                        </span>
                        <span>{circle.members}</span>
                        <span className="mx-1">•</span>
                        <span>{circle.posts}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
