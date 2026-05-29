import { Link } from "react-router-dom";
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { Post } from "../types";
import { USERS } from "../data";

import React from 'react';

export default function PostCard({ post, key }: { post: Post, key?: React.Key }) {
  const user = USERS[post.username];

  if (!user) return null;

  return (
    <article className="border-b border-[#dbdbdb] bg-[#fff] md:border md:rounded-[8px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center px-[12px] h-[56px] gap-[12px]">
        <Link to={`/${user.username}`} className="flex items-center gap-[12px] flex-grow">
          <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shrink-0">
            <img src={user.avatar} alt={user.username} className="w-full h-full object-cover rounded-full border-[2px] border-white bg-[#eee]" />
          </div>
          <div className="flex flex-col flex-grow">
            <strong className="text-[14px] leading-none text-black">{user.username}</strong>
            {post.location && (
              <span className="text-[12px] text-[#8e8e8e] mt-[2px]">{post.location}</span>
            )}
          </div>
        </Link>
        <button className="text-[20px] font-bold text-black tracking-widest leading-none">
          •••
        </button>
      </div>

      {/* Image */}
      <div className="w-full bg-[#f0f0f0] aspect-square flex items-center justify-center relative">
        <img src={post.imageUrl} alt="Post content" className="w-full h-full object-cover" />
      </div>

      {/* Actions */}
      <div className="px-[12px] py-[8px] flex gap-[16px] text-black">
          <button><Heart className="w-[24px] h-[24px] hover:opacity-50 transition-opacity" /></button>
          <button><MessageCircle className="w-[24px] h-[24px] hover:opacity-50 transition-opacity" /></button>
          <button><Send className="w-[24px] h-[24px] hover:opacity-50 transition-opacity" /></button>
          <button className="ml-auto"><Bookmark className="w-[24px] h-[24px] hover:opacity-50 transition-opacity" /></button>
      </div>

      {/* Info & Caption */}
      <div className="px-[12px] pb-[12px] text-[14px]">
        <div className="font-bold mb-1">좋아요 {post.likes.toLocaleString()}개</div>
        
        <div className="leading-relaxed break-words whitespace-pre-wrap mb-2">
          <Link to={`/${user.username}`} className="font-bold mr-2">{user.username}</Link>
          {post.caption.split(/(@[\w_.]+)|(#[\w_]+)/g).map((part, i) => {
            if (part && part.startsWith("@")) {
              const mentionedName = part.slice(1);
              return (
                <Link key={i} to={`/${mentionedName}`} className="text-[#00376b] hover:underline">
                  {part}
                </Link>
              );
            } else if (part && part.startsWith("#")) {
              return (
                <span key={i} className="text-[#00376b] font-semibold cursor-pointer">
                  {part}
                </span>
              );
            }
            return part;
          })}
        </div>

        {/* Comments */}
        {post.comments.length > 0 && (
          <>
            <div className="text-[14px] text-[#8e8e8e] mt-[8px] mb-[4px] cursor-pointer">
              댓글 {post.commentCount ? post.commentCount.toLocaleString() : post.comments.length}개 모두 보기
            </div>
            <div className="flex flex-col">
              {post.comments.map((comment) => (
                <div key={comment.id} className="text-[14px] leading-relaxed break-words mt-[4px]">
                  <Link to={`/${comment.username}`} className="font-bold mr-2">{comment.username}</Link>
                  <span>
                    {comment.text.split(/(@[\w_.]+)|(#[\w_]+)/g).map((part, i) => {
                      if (part && part.startsWith("@")) {
                        const mentionedName = part.slice(1);
                        return (
                          <Link key={i} to={`/${mentionedName}`} className="text-[#00376b] hover:underline">
                            {part}
                          </Link>
                        );
                      } else if (part && part.startsWith("#")) {
                         return (
                           <span key={i} className="text-[#00376b] font-semibold cursor-pointer">
                             {part}
                           </span>
                         );
                      }
                      return part;
                    })}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-[10px] text-[#8e8e8e] font-medium uppercase mt-[8px]">
          {post.timestamp}
        </div>
      </div>
    </article>
  );
}
