export function WhiteSquare({ size, top, left }) {
    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}px`,
          left: `${left}px`,
        }}
        className="bg-[#F3F4F6] absolute"
      ></div>
    );
  }