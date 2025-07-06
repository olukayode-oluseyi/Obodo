//import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";

export default function AppLayout() {

  //const isLoggedIn = useAuthStore((state) => state.isLoggedIn); 



  // if (false) {

  //   return <Redirect href={"/welcome"} />;
    
  // }
  return (

    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
