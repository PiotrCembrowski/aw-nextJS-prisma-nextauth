import React from "react";

const MyFavoritePage = async () => {
  if (!userId) {
    return (
      <main className="max-w-[1500pz] max-auto px-6 py-12">
        <p>You need to be authenticated.</p>
      </main>
    );
  }
  return <div>MyFavoritePage</div>;
};

export default MyFavoritePage;
