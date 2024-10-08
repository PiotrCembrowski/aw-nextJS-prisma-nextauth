import Conversation from "../components/inbox/Conversation";

export type UserType = {
  id: string;
  name: string;
  avatar_url: string;
};

export type ConversationType = {
  id: string;
  users: UserType[];
};

const InboxPage = () => {
  const userId = false;

  if (!userId) {
    return (
      <main className="max-w-[1500px] max-auto px-6 py-12">
        <p>You need to be authenticated.</p>
      </main>
    );
  }

  // const conversation = await api chat

  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
      <h1 className="my-6 text-2xl">Inbox</h1>
      {/* liip trough api chat
        soncersation.map((conversation: Conversation))
      */}
      <Conversation />
      <Conversation />
      <Conversation />
    </main>
  );
};

export default InboxPage;
