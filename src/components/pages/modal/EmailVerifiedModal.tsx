import { Center, Heading } from "@yamada-ui/react";

export const EmailVerifiedModal = () => {
  return (
    <div>
      <Center className="min-h-screen bg-black">
        <div className="bg-primary-100 rounded-md w-2/3 text-center h-20 flex items-center">
          <Heading as="h2" size="sm" color="white" style={{ margin: "auto" }}>
            メールアドレスの認証をしてください
          </Heading>
        </div>
        {/* <Loading variant="audio" size="6xl" color="green.500" h="100vh" /> */}
      </Center>
    </div>
  );
};
