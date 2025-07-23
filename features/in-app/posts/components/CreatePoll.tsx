import CloseIcon from "@/assets/icons/close.svg";
import MoreIcon from "@/assets/icons/more.svg";
import PlusIcon from "@/assets/icons/plus2.svg";
import Textfield from "@/components/ui/common/inputs/Textfield";
import TextfieldLabel from "@/components/ui/common/TextfieldLabel";
import { AppTheme } from "@/theme";
import { Text, XView, YView } from "@/theme/component";
import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

const CreatePoll = ({ handleClose }: { handleClose: () => void }) => {
  const theme = useTheme<AppTheme>();
  const [answers, setAnswers] = React.useState(["", ""]);
  return (
    <YView
      padding={"x16"}
      gap={"x16"}
      borderColor={"ProductBlack200"}
      borderTopWidth={1}
      borderBottomWidth={1}
    >
      <XView
        width={"100%"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontSize={18} lineHeight={26} variant={"authHeading"}>
          Create poll
        </Text>
        <TouchableOpacity onPress={() => handleClose()}>
          <XView
            height={24}
            width={24}
            borderRadius={"s"}
            backgroundColor={"ProductBlack100"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <CloseIcon />
          </XView>
        </TouchableOpacity>
      </XView>
      <Textfield
        label="Question"
        placeholder="e.g Do you feel connected to your local community?"
      />
      <YView gap={"xs"}>
        <TextfieldLabel label={"Answers options"} />
        <YView
          backgroundColor={"ProductBlack100"}
          padding={"x16"}
          borderRadius={"x16"}
          gap={"m"}
        >
          {answers.map((answer, idx) => {
            return (
              <XView
                height={48}
                borderRadius={"x12"}
                backgroundColor={"white"}
                paddingLeft={"x16"}
                key={idx}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <TextInput
                  numberOfLines={4}
                  style={{
                    flex: 1,
                    height: "100%",
                    backgroundColor: "transparent",
                    fontSize: 16,
                    fontFamily: theme.fontFamilies.regular,
                    lineHeight: 24,
                    color: "#2C3948",
                  }}
                  placeholder={`Answer ${idx + 1}`}
                  value={answer}
                  onChangeText={(text) => {
                    const updated = [...answers];
                    updated[idx] = text;
                    setAnswers(updated);
                  }}
                />
                <TouchableOpacity
                  style={{
                    height: "100%",
                    width: 48,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MoreIcon />
                </TouchableOpacity>
              </XView>
            );
          })}

          <XView flexDirection={"row"} justifyContent={"flex-end"}>
            <TouchableOpacity
              disabled={answers.length === 3}
              hitSlop={20}
              onPress={() => setAnswers([...answers, ""])}
              style={{
                height: 32,
                flexDirection: "row",
                opacity: answers.length === 3 ? 0.3 : 1,
                alignItems: "center",
                borderRadius: theme.borderRadii.bottonPrimaryRadius,
                paddingHorizontal: theme.spacing.m,
                gap: theme.spacing.s,
              }}
            >
              <PlusIcon />
              <Text>Add answer</Text>
            </TouchableOpacity>
          </XView>
        </YView>
      </YView>
    </YView>
  );
};

export default CreatePoll;

const styles = StyleSheet.create({});
