import { Link, useLocation, Outlet } from "react-router-dom";
import { Home, Search, PlusSquare, Heart, User } from "lucide-react";
import { cn } from "../lib/utils";

export default function Layout() {
  const location = useLocation();

  const NAV_ITEMS = [
    { icon: Home, path: "/", label: "홈" },
    { icon: Search, path: "/", label: "검색" },
    { icon: PlusSquare, path: "#", label: "만들기" },
    { icon: Heart, path: "/characters", label: "알림" }, // Heart mapped to Characters feature
    { icon: User, path: "/login", label: "프로필" }, // Login generic screen
  ];

  return (
    <div className="flex h-screen w-full bg-[#fafafa] text-black overflow-hidden font-sans md:flex-row flex-col">
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex flex-col w-[320px] bg-white border-r border-[#dbdbdb] p-4 shrink-0">
        <div className="mb-[36px] px-2 pt-4">
          <Link to="/" className="text-[24px] font-bold font-serif italic tracking-[-1px]">
            BAEKSA-GRAM
          </Link>
        </div>
        <div className="flex flex-col gap-[16px] flex-1 mt-4">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path && item.path !== "#";
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-[16px] p-[12px] rounded-lg hover:bg-black/5 transition-colors",
                  isActive && "font-bold"
                )}
              >
                <Icon
                  className={cn("w-[24px] h-[24px]", isActive && "stroke-[2.5px]")}
                  fill={isActive ? "currentColor" : "none"}
                />
                <span className="text-[16px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-auto px-2">
          <div className="text-[12px] text-[#c7c7c7] leading-relaxed">
            소개 • 도움말 • 홍보 센터 • API • 채용 정보<br/>
            개인정보처리방침 • 약관 • 위치 • 언어<br/><br/>
            © 2026 BAEKSA-GRAM FROM BAEKSA UNIV.
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-[60px] md:pb-0 bg-[#fafafa] flex justify-center md:pt-[30px]">
        <div className="w-full max-w-[470px] bg-transparent min-h-full pb-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-[60px] border-t border-[#dbdbdb] bg-white flex items-center justify-around z-50">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path && item.path !== "#";
          return (
            <Link key={item.label} to={item.path} className="p-2">
              <Icon
                className="w-[24px] h-[24px] text-black"
                fill={isActive ? "currentColor" : "none"}
                strokeWidth={isActive ? 2.5 : 2}
              />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
