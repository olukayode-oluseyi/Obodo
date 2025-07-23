import SinglePostDetails from "@/features/in-app/posts/screens/posts/SinglePost";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const SinglePost = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  console.log(id, "ID");
  return <SinglePostDetails />;
};

export default SinglePost;

const styles = StyleSheet.create({});
