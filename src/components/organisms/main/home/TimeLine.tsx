import { useAppSelector } from "@/hooks/reduxHooks";
import { BoxNavs } from "@/components/molecules/BoxNavs";
import { homeTabsType } from "@/types/BoxNavsProps";
import { SquarePen } from "lucide-react";
import { Modal, ModalHeader, useDisclosure } from "@yamada-ui/react";
import { PostBoxModal } from "./PostBoxModal";

export const TimeLine = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const postItems = useAppSelector((state) => state.postItems.post);
  const tabs: homeTabsType = {
    type: "timeline",
    tabinfo: [
      { name: "フォロー中", content: postItems },
      { name: "オープン", content: postItems },
    ],
  };
  return (
    <div className="bg-primary-300 rounded-lg shadow-md mt-8">
      <div className=" border-b border-border-300 ">
        <BoxNavs tabs={tabs} />
      </div>
      {/* 投稿ボタン */}
      <div className="fixed bottom-6 right-6 dt:hidden">
        <button
          className="bg-secondary-200 text-text-100 px-5 py-5 shadow-lg rounded-full z-20"
          onClick={onOpen}
        >
          <SquarePen />
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        style={{ backgroundColor: "#171717" }}
        textColor="white"
        size="2xl"
        padding={0}
      >
        <ModalHeader
          style={{
            borderBottom: "1px solid #3f3f3f",
            justifyContent: "center",
          }}
          marginY="sm"
          paddingY="sm"
          // paddingBottom="sm"
          textColor="#F3F3F3"
          fontSize="sm"
        >
          投稿
        </ModalHeader>

        <PostBoxModal onClose={onClose} />
      </Modal>
    </div>
  );
};
