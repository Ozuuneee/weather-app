export function Searchinput() {
  return (
    <div className="w-[580px] h-[80px] bg-[#ffffff] rounded-[48px] flex  items-center gap-[24px] z-30 text-black mr-[200px]">
      <img className="opacity-20 ml-[24px]" src="search.png" />
      <input
        placeholder="Search city"
        className="focus:outline-none border-none"
      ></input>
    </div>
  );
}
export function Circle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#ffffff] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
export function CircleGray({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="border rounded-full border-[#111827] border-opacity-[8%] absolute z-20"
    ></div>
  );
}
export function Square({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-[#0F141E] z-10 rounded-[36px] absolute"
    ></div>
  );
}
export function WhiteSquare({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-stone-50 absolute"
    ></div>
  );
}

export function MidCircle({ size, top, left }) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}px`,
        left: `${left}px`,
      }}
      className="bg-stone-50 rounded-full absolute"
    ></div>
  );
}
