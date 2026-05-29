import { useState } from "react";
import { Link } from "react-router-dom";

export default function CharProfiles() {
  const CHARS = [
    {
      id: "u2",
      name: '백요한',
      username: 'yohan_17',
      image: 'https://i.postimg.cc/g205S4rD/YHPROF.webp',
      details: '22살/188/ENTP/7W8/버건디머리, 금안\n천주교 신자(세례명 미카엘)\n일요일마다 옆동네로 원정 미사\n아이스하키선수(LW)/등번호17/백사 프로스트 (Baeksa Frost)'
    },
    {
      id: "u3",
      name: '백하랑',
      username: 'ha5w1m',
      image: 'https://i.postimg.cc/FK7MRG4x/HRPROF.webp',
      details: '21살/187/넓은 어깨/ENFJ/9w8/흑발흑안 웃을 때 보조개\n수영선수/백사 레이저 (Baeksa Razors)',
    },
    {
      id: "u4",
      name: '백신우',
      username: 'beaksinwoo.1',
      image: 'https://i.postimg.cc/NfDSkZGD/SWPROF.webp',
      details: '20살/193/92/남색머리,청안/로판덕후/무표정울보\n배구선수/미들블로커/등번호1/백사 제니스 (Baeksa Zenith)'
    }
  ];

  return (
    <div className="flex flex-col bg-[#fafafa] min-h-full pb-10">
      <header className="sticky top-0 z-10 px-4 bg-white border-b border-[#dbdbdb] flex items-center justify-center h-[60px] md:hidden">
        <h1 className="text-[16px] font-bold text-black">알림 (캐릭터 소개)</h1>
      </header>

      <div className="p-4 flex flex-col gap-8 md:p-6 md:gap-10">
        {CHARS.map((char) => (
          <div key={char.id} className="bg-white border border-[#dbdbdb] rounded-[8px] overflow-hidden flex flex-col">
            <div className="p-3 border-b border-[#dbdbdb] flex items-center justify-between bg-white">
               <Link to={`/${char.username}`} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border border-[#dbdbdb] bg-[#eee] overflow-hidden">
                     <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                     <span className="font-bold text-[14px] leading-tight text-black">{char.username}</span>
                     <span className="text-[12px] text-[#8e8e8e]">{char.name}</span>
                  </div>
               </Link>
               <Link to={`/${char.username}`} className="bg-[#efefef] text-black font-semibold text-[13px] px-4 py-1.5 rounded-[8px] hover:bg-[#dbdbdb] transition-colors">
                  프로필 보기
               </Link>
            </div>
            
            <div className="w-full relative aspect-square bg-[#f0f0f0]">
               <img src={char.image} alt={char.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-4 bg-white">
              <h2 className="font-bold text-[15px] mb-2 text-black">{char.name} 상세 프로필</h2>
              <p className="text-[14px] leading-relaxed whitespace-pre-wrap text-[#262626]">
                {char.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
