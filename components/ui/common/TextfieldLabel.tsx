import { Text, XView } from '@/theme/component';
import React from 'react';
import { StyleSheet, } from 'react-native';

interface TextfieldLabelProps {
  label: string;
}

const TextfieldLabel = ({ label }: TextfieldLabelProps) => {
  return (
    <XView>
      <Text variant={'textDefault'} >{label}</Text>
    </XView>
  )
}

export default TextfieldLabel

const styles = StyleSheet.create({})