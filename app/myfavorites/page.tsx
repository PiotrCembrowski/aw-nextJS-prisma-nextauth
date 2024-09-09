import React, { useState } from "react";

const MyFavoritePage = async () => {
  const userId = true;

  if (!userId) {
    return (
      <main className="max-w-[1500pz] max-auto px-6 py-12">
        <p>You need to be authenticated.</p>
      </main>
    );
  }

  return (
    <main className="max-w-[1500pz] max-auto px-6 pb-12">
      <h1 className="my-6 text-2xl">My favorites</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
    </main>
  );
};

export default MyFavoritePage;
