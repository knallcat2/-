import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-white md:bg-transparent px-4">
      <div className="w-full max-w-[350px] bg-white md:border md:border-[#dbdbdb] md:p-10 flex flex-col items-center pt-8 md:pt-10">
        <h1 className="text-[36px] font-serif font-bold italic tracking-[-1px] mb-[40px]">BAEKSA-GRAM</h1>
        
        <form className="w-full flex flex-col gap-2 mb-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="w-full bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 py-[9px] text-[12px] focus:outline-none focus:border-[#a8a8a8]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="w-full bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 py-[9px] text-[12px] focus:outline-none focus:border-[#a8a8a8]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#0095f6] text-white font-semibold rounded-[8px] py-[8px] mt-2 opacity-70 hover:opacity-100 transition-opacity"
            disabled={!username || !password}
          >
            로그인
          </button>
        </form>

        <div className="flex w-full items-center my-4">
          <div className="flex-1 h-[1px] bg-[#dbdbdb]"></div>
          <span className="px-4 text-[13px] text-[#8e8e8e] font-semibold">또는</span>
          <div className="flex-1 h-[1px] bg-[#dbdbdb]"></div>
        </div>

        <button className="text-[#385185] font-semibold text-[14px] flex items-center gap-2 mb-4">
          Facebook으로 로그인
        </button>

        <button className="text-[#00376b] text-[12px] mt-2">
          비밀번호를 잊으셨나요?
        </button>
      </div>

      <div className="w-full max-w-[350px] bg-white md:border md:border-[#dbdbdb] py-5 flex justify-center mt-4">
        <span className="text-[14px] text-black">
          계정이 없으신가요? <span className="text-[#0095f6] font-semibold cursor-pointer">가입하기</span>
        </span>
      </div>
    </div>
  );
}
