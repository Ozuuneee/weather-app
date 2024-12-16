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