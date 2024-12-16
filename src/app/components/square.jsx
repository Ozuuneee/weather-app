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