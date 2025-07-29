import SingleEventDetails from "@/features/in-app/events/screens/SingleEvent";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const SingleEvent = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return <SingleEventDetails />;
};

export default SingleEvent;

const styles = StyleSheet.create({});
