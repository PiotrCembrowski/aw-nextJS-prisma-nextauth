import Image from "next/image";
import Button from "@/app/components/ui/Button";

const UserDetailPage: React.FC = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="cols-span-1 mb-4 ">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src="/images/user.png"
              width={200}
              height={500}
              alt="user"
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">User Name</h1>

            <Button title="preview" />
          </div>
        </aside>

        <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">Posts</div>
      </div>
    </main>
  );
};

export default UserDetailPage;
