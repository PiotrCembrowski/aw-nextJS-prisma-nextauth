"use client";
import { ConversationType } from "@/app/inbox/page";
import CustomButton from "../forms/CustomButton";
import { MessageType } from "@/app/inbox/[id]/page";

interface ConversationDetailProps {
  token: string;
  userId: string;
  conversation: ConversationType;
  messages: MessageType[];
}

const ConversationDetail: React.FC<ConversationDetailProps> = ({
  userId,
  token,
  conversation,
  messages,
}) => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">John Doe</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quas consectetur earum culpa delectus adipisci repellat esse sequi.
            Dolores, amet.
          </p>
        </div>

        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">My name</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quas consectetur earum culpa delectus adipisci repellat esse sequi.
            Dolores, amet.
          </p>
        </div>
      </div>

      <div className="mt-4 py-4 px-6 flex border border-gray-300 space-x-4 rounded-xl">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-2 bg-gray-200 rounded-xl"
        />

        <CustomButton
          label="Send"
          onClick={() => {
            console.log("clicked");
          }}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetail;
