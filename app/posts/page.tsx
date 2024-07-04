import Image from "next/image";
import Link from "next/link";

const PostsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My posts</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-2">
        <div className="p-5 mt-4 grid grid-cols-1 shadow-md border border-gray-300 rounded-xl max-w-full md:max-w-[350px]">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/images/sunrise.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="sunrise"
              />
            </div>
            <hr className="mt-4" />
          </div>
          <div className="col-span-3 space-y-3">
            <h2 className="my-4 text-xl">Post name</h2>

            <p>
              <strong>Post date:</strong> 14/2/2024
            </p>
            <p>
              <strong>Excerpts:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint, vitae? A, inventore rerum! Voluptate
              dolores quas laudantium reprehenderit consequatur. Aliquam!
            </p>
            <hr />
            <Link
              href="/details"
              className="block py-3 px-5 text-white bg-aw w-32 hover:bg-awDark transition"
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="p-5 mt-4 grid grid-cols-1 shadow-md border border-gray-300 rounded-xl max-w-full md:max-w-[350px]">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/images/sunrise.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt="sunrise"
              />
            </div>
            <hr className="mt-4" />
          </div>
          <div className="col-span-3 space-y-3">
            <h2 className="my-4 text-xl">Post name</h2>

            <p>
              <strong>Post date:</strong> 14/2/2024
            </p>
            <p>
              <strong>Excerpts:</strong> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sint, vitae? A, inventore rerum! Voluptate
              dolores quas laudantium reprehenderit consequatur. Aliquam!
            </p>
            <hr />
            <Link
              href="/details"
              className="block py-3 px-5 text-white bg-aw w-32 hover:bg-awDark transition"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostsPage;
