import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getCurrentUser } from "@/slice/userSlice";
import { Box, Button, Center, Flex, Modal, ModalBody, ModalHeader, Text } from "@yamada-ui/react";
import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";

type ProfielMenuPanelProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const ProfielMenuPanel: FunctionComponent<ProfielMenuPanelProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.user);
  const signout = async () => {
    // await authRepository.signout();
    dispatch(getCurrentUser(null));
  };
  if (currentUser == null) return <Navigate replace to="/signin" />;
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        style={{ backgroundColor: "#171717" }}
        textColor="white"
      >
        <ModalHeader></ModalHeader>

        <ModalBody>
          <Center w="100%">
            <Box textAlign="center" marginY="2xl">
              <Text fontSize="xl">ログアウトしますか？</Text>
            </Box>
          </Center>
          <Flex w="100%">
            <Box w="50%">
              <Center>
                <Button onClick={signout}>ログアウト</Button>
              </Center>
            </Box>
            <Box w="50%">
              <Center>
                <Button onClick={onClose}>キャンセル</Button>
              </Center>
            </Box>
          </Flex>
        </ModalBody>
      </Modal>
    </>
  );
};
