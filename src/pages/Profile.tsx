import { useState } from "react";
import { User, Post, Highlight, Story } from "../types";
import { POSTS } from "../data";
import ProfileHeader from "../components/ProfileHeader";
import { Grid, ChevronLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StoryViewer from "../components/StoryViewer";
import PostCard from "../components/PostCard";

export default function Profile({ user }: { user: User }) {
  const userPosts = POSTS.filter((post) => post.username === user.username);
  const navigate = useNavigate();
  
  const [selectedHighlight, setSelectedHighlight] = useState<Highlight | null>(null);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  return (
    <div className="flex flex-col bg-white min-h-full border-x border-[#dbdbdb] md:border md:rounded-[8px] overflow-hidden">
      <header className="sticky top-0 z-10 bg-white border-b border-[#dbdbdb] flex items-center justify-between h-[60px] md:hidden">
        <button onClick={() => navigate(-1)} className="p-2 ml-2 hover:bg-black/5 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-black" />
        </button>
        <h1 className="text-[16px] font-bold truncate text-black">{user.username}</h1>
        <div className="w-[40px]"></div> {/* Spacer for centering */}
      </header>
      
      <ProfileHeader 
        user={user} 
        onStoryClick={(story) => setSelectedStory(story)}
        onHighlightClick={(highlight) => setSelectedHighlight(highlight)}
      />

      {/* Tabs */}
      <div className="flex border-b border-[#dbdbdb]">
        <div className="flex-1 border-t border-black pb-2 pt-3 flex justify-center items-center gap-2 cursor-pointer -mt-[1px]">
          <Grid className="w-4 h-4 text-black" />
          <span className="text-[12px] font-semibold tracking-widest text-black uppercase">게시물</span>
        </div>
      </div>

      {/* Grid */}
      {userPosts.length > 0 ? (
        <div className="grid grid-cols-3 gap-[2px]">
          {userPosts.map((post) => (
            <div key={post.id} className="aspect-square bg-[#f0f0f0] relative group cursor-pointer" onClick={() => setSelectedPost(post)}>
              <img src={post.imageUrl} alt={post.caption} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-12 text-center text-[#8e8e8e]">
          <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mb-4">
            <span className="text-2xl font-serif text-black">+</span>
          </div>
          <h2 className="text-[18px] font-bold text-black mb-2">게시물 없음</h2>
          <p className="text-[14px]">사진과 동영상을 공유하면 프로필에 표시됩니다.</p>
        </div>
      )}

      {selectedHighlight && (
        <StoryViewer 
          images={selectedHighlight.images}
          imageUrl={selectedHighlight.fullImage || selectedHighlight.coverImage} 
          caption={selectedHighlight.caption}
          title={selectedHighlight.title}
          onClose={() => setSelectedHighlight(null)} 
        />
      )}

      {selectedStory && (
        <StoryViewer 
          imageUrl={selectedStory.imageUrl} 
          title={user.username}
          onClose={() => setSelectedStory(null)} 
        />
      )}

      {selectedPost && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center">
          <div className="absolute top-0 right-0 p-4 z-10">
             <button onClick={() => setSelectedPost(null)}><X className="w-8 h-8 text-white hover:opacity-75" /></button>
          </div>
          <div className="w-full max-w-[470px] max-h-[90vh] overflow-y-auto bg-white rounded-[8px]">
            <PostCard post={selectedPost} />
          </div>
        </div>
      )}
    </div>
  );
}
