import { POSTS } from "../data";
import PostCard from "../components/PostCard";

export default function Explore() {
  return (
    <div className="flex flex-col w-full bg-transparent">
      {/* Sticky Header - standard instagarm explore header or logo */}
      <header className="sticky top-0 z-10 h-[60px] px-4 border-b border-[#dbdbdb] bg-white flex items-center justify-between md:hidden">
         <h1 className="text-[24px] font-serif font-bold italic tracking-[-1px]">BAEKSA-GRAM</h1>
         <div className="flex gap-[22px] text-[24px]">
           <span>❤️</span>
         </div>
      </header>

      {/* Feed List */}
      <div className="flex flex-col md:gap-[12px] pb-[40px]">
        {POSTS.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
