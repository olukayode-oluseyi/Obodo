import EventRegistered from "@/features/in-app/events/screens/Registered";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Registered = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  return <EventRegistered/>;
};

export default Registered;

const styles = StyleSheet.create({});
