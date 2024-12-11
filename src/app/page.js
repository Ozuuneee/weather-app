export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-[#404040]">
      <div className="w-[800px] h-[1200px] bg-[#F3F4F6] flex justify-center items-center relative">
        <div className="w-[414px] h-[828px] bg-white rounded-[48px] absolute blur-lx"></div>
      </div>
      <div className="w-[800px] h-[1200px] bg-[#0f141e] flex justify-center items-center relative">
        <div className="w-[414px] h-[828px] bg-[#111827BF] rounded-[48px] absolute blur-sm"></div>
      </div>
      <div className="w-[100px] h-[100px] rounded-full bg-white absolute"></div>
    </div>
  );
}
