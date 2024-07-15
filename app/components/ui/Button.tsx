interface Props {
  title: string;
}

const ContactButton: React.FC<Props> = ({ title }) => {
  return (
    <div className="mt-6 py-4 px-6 bg-aw text-white rounded-xl cursor-pointer hover:bg-awDark transition">
      {title}
    </div>
  );
};

export default ContactButton;
