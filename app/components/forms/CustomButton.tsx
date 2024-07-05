interface CustomButtonProps {
  label: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick }) => {
  return (
    <div
      className="w-full py-4 bg-aw hover:bg-awDark text-white rounded-xl transition cursor-pointer"
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default CustomButton;
