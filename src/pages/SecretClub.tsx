import { useState } from "react";
import { User } from "../types";
import { Lock, EyeOff, AlertCircle, ChevronLeft, X } from "lucide-react";
import { USERS } from "../data";
import { useNavigate } from "react-router-dom";

export default function SecretClub({ user }: { user: User }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-zinc-950 min-h-full text-zinc-100 relative w-full overflow-y-auto">
      <header className="sticky top-0 z-10 p-3 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 flex items-center h-[60px] md:hidden">
        <button onClick={() => navigate(-1)} className="absolute left-2 p-2 rounded-full hover:bg-zinc-800 transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex items-center justify-center flex-1">
          <Lock className="w-4 h-4 mr-2 text-red-500" />
          <h1 className="text-[16px] font-bold font-mono text-red-100">{user.username}</h1>
        </div>
      </header>

      {/* Secret Cover before unlock */}
      {!isUnlocked ? (
        <div className="flex flex-col flex-1 p-6 z-10 pb-20 justify-center">
           <div className="mx-auto w-24 h-24 rounded-full border-2 border-red-900/50 flex flex-col items-center justify-center mb-6 bg-zinc-900 relative">
             <EyeOff className="w-8 h-8 text-zinc-500 mb-1" />
           </div>
           
           <h2 className="text-center text-2xl font-black tracking-tight text-white mb-2">영화동아리 백야, 함께하시겠습니까?</h2>
           <p className="text-center text-zinc-400 font-mono text-sm mb-12">
             영화 동아리로 위장한 그들의 아지트! 함께 해 볼 사람만 동아리 방 구경하기~
           </p>

           <div className="bg-red-950/30 border border-red-900/50 rounded-xl p-4 mb-8">
             <div className="flex items-start gap-3">
               <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
               <p className="text-sm leading-relaxed text-zinc-300">
                 관계자(백요한, 백하랑, 백신우) 외 접근을 금지하는 위장 동아리 계정입니다.
                 태그를 통해 들어온 인원만 내부 정보 열람이 가능합니다.
               </p>
             </div>
           </div>

           {/* Enter Button */}
           <button 
            onClick={() => setIsUnlocked(true)}
            className="w-full bg-red-900 hover:bg-red-800 text-white font-bold py-4 rounded-xl transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2"
           >
              클릭하여 열람하기 <Lock className="w-4 h-4" />
           </button>
        </div>
      ) : (
        /* Unlocked Area */
        <div className="flex flex-col flex-1 animate-in fade-in duration-700 pb-[40px]">
          <div className="p-2 md:p-8 flex flex-col gap-4">
            <div className="text-center py-10">
               <p className="text-lg text-white font-medium tracking-wide">
                 영화? 보긴 봅니다...
               </p>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-[600px] mx-auto pb-12">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-zinc-300 text-sm tracking-wider uppercase ml-1">동아리방</h3>
                <div className="w-full bg-zinc-950 overflow-hidden relative border border-zinc-800 rounded-lg">
                   <img src="https://i.postimg.cc/GmPQjRhK/dong-alibang.png" alt="동아리방" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-zinc-300 text-sm tracking-wider uppercase ml-1">백가네 훔쳐보기 (클릭하여 확대)</h3>
                <div 
                  className="w-full bg-zinc-950 overflow-hidden relative border border-zinc-800 rounded-lg cursor-pointer hover:ring-2 hover:ring-red-500/50 transition-all"
                  onClick={() => setSelectedImage("https://i.postimg.cc/yNVTQGkQ/jibsogae.png")}
                >
                   <img src="https://i.postimg.cc/yNVTQGkQ/jibsogae.png" alt="백가네 훔쳐보기" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedImage && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex flex-col items-center justify-center p-4">
          <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 z-50">
            <X className="w-8 h-8 text-white hover:opacity-75 transition-opacity" />
          </button>
          <div className="relative w-full h-full overflow-auto flex items-start md:items-center justify-center pt-16 md:pt-4">
             <img src={selectedImage} alt="Expanded View" className="w-auto h-auto min-w-[150%] md:min-w-0 max-w-none md:max-w-full md:max-h-full object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}
