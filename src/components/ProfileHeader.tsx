import { User, Highlight, Story } from "../types";

export default function ProfileHeader({ 
  user, 
  onStoryClick, 
  onHighlightClick 
}: { 
  user: User,
  onStoryClick?: (story: Story) => void,
  onHighlightClick?: (highlight: Highlight) => void 
}) {
  const hasStory = user.stories && user.stories.length > 0;

  return (
    <div className="flex flex-col pt-6 pb-4 px-4 border-b border-[#dbdbdb]">
      <div className="flex items-center justify-between mb-6">
        {/* Avatar */}
        <div 
          className={`w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden shrink-0 p-[3px] ${hasStory ? 'cursor-pointer bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]' : 'border border-[#dbdbdb]'}`}
          onClick={() => hasStory && onStoryClick && onStoryClick(user.stories![0])}
        >
          <div className={`w-full h-full rounded-full border-[3px] border-white overflow-hidden bg-[#eee]`}>
             <img src={user.avatar} alt={user.username} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-1 justify-around text-center ml-4 md:ml-8 gap-2">
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-black">{user.postsCount}</span>
            <span className="text-[14px] text-black">게시물</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-black">{user.followers.toLocaleString()}</span>
            <span className="text-[14px] text-black">팔로워</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-bold text-black">{user.following.toLocaleString()}</span>
            <span className="text-[14px] text-black">팔로잉</span>
          </div>
        </div>
      </div>

      {/* Bio Information */}
      <div className="flex flex-col">
        <span className="text-[14px] font-bold text-black">{user.name}</span>
        <div className="text-[14px] leading-relaxed whitespace-pre-wrap mt-1 text-black">
          {user.bio.split(/(#[\w_]+|@[\w_.]+)/g).map((part, i) => {
            if (part && part.startsWith("#")) {
              return (
                <span key={i} className="text-[#00376b] font-semibold cursor-pointer">
                  {part}
                </span>
              );
            }
            return part;
          })}
        </div>
        {user.link && (
          <a href={`https://${user.link}`} className="text-[#00376b] font-semibold text-[14px] mt-1 hover:underline">
            {user.link}
          </a>
        )}
      </div>

      <div className="flex gap-[8px] mt-4 text-[14px] font-semibold">
         <button className="flex-1 bg-[#efefef] hover:bg-[#dbdbdb] transition-colors py-[6px] rounded-[8px] text-black">팔로잉</button>
         <button className="flex-1 bg-[#efefef] hover:bg-[#dbdbdb] transition-colors py-[6px] rounded-[8px] text-black">메시지</button>
      </div>

      {/* Highlights */}
      {user.highlights && user.highlights.length > 0 && (
        <div className="flex gap-[16px] mt-6 overflow-x-auto pb-2 scrollbar-none">
          {user.highlights.map(highlight => (
            <div 
              key={highlight.id} 
              className="flex flex-col items-center shrink-0 w-[64px] cursor-pointer"
              onClick={() => onHighlightClick && onHighlightClick(highlight)}
            >
              <div className="w-[64px] h-[64px] rounded-full border border-[#dbdbdb] p-[2px] flex items-center justify-center mb-[4px]">
                <div className="w-full h-full rounded-full border-[2px] border-white overflow-hidden bg-[#eee]">
                  <img src={highlight.coverImage} alt={highlight.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-[12px] text-black text-center truncate w-full px-1">{highlight.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
