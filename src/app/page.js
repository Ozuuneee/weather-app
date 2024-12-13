export default function Home() {
  return (
    <div className="w-full h-full flex bg-[#404040] justify-center">
      <div className="w-[800px] h-[1200px] bg-stone-50 flex items-center justify-center"></div>
      <div className="relative w-[800px] h-[1200px] bg-[#0F141E] flex items-center justify-center">
        <div className="w-[160px] h-[160px] rounded-full bg-stone-50 absolute -left-[80px] top-[420px]"></div>

        <div className="w-[100px] h-[100px] absolute -left-0 top-[326px] rounded-[36px] bg-[#0F141E] z-10"></div>
        <div className="w-[40px] h-[60px] bg-stone-50 absolute -left-3 top-[380px]"></div>

        <div className="w-[100px] h-[100px] absolute -left-0 top-[574px] rounded-[36px] bg-[#0F141E] z-10"></div>
        <div className="w-[40px] h-[60px] bg-stone-50 absolute -left-3 top-[550px]"></div>
        <div className="w-[340px] h-[340px] absolute border border-[#111827] border-opacity-[8%] rounded-full -left-[170px] top-[330px] z-20"></div>
        <div className="w-[540px] h-[540px] absolute border border-[#111827] border-opacity-[8%] rounded-full -left-[270px] top-[230px]"></div>
        <div className="w-[940px] h-[940px] absolute border border-[#111827] border-opacity-[8%] rounded-full -left-[460px] top-[50px]"></div>
        <div className="w-[1340px] h-[1340px] absolute border border-[#111827] border-opacity-[8%] rounded-full -left-[650px] -top-[120px]"></div>
      </div>
    </div>
  );
}
