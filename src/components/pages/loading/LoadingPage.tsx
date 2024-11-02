import { Center, Loading } from "@yamada-ui/react";

export const LoadingPage = () => {
  return (
    <div>
      <Center className="min-h-screen bg-black">
        <Loading variant="audio" size="6xl" color="green.500" h="100vh" />
      </Center>
    </div>
  );
};
