//import { useAuthStore } from "@/store/authStore";
import { Redirect } from "expo-router";

export default function AppLayout() {

  //const isLoggedIn = useAuthStore((state) => state.isLoggedIn); 



  if (true) {

    return <Redirect href={"/welcome"} />;
    
  }
  // return (

  //   <Stack
  //     screenOptions={{
  //       headerShown: false,
  //     }}
  //   />
  // );
}
