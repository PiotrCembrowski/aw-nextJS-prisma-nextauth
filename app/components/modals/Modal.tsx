"use client";

const Modal: React.FC = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
      <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 h-auto">
        <div
          className={`translate duration-600 h-full translate-y-0 opacity-100`}
        ></div>
      </div>
    </div>
  );
};

export default Modal;
