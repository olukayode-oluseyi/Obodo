import { Button } from '@/components/ui/common/button'
import { YView } from '@/theme/component'
import { useLocalSearchParams, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const SinglePost = () => {
    const {id } = useLocalSearchParams<{id: string}>()
    const router = useRouter()
    console.log(id, 'ID')
  return (
    <YView backgroundColor={'primary'}flex={1} justifyContent={'center'} alignItems={'center'} >
<Button title='Go back'  onPress={()=>router.back()}  />
    </YView>
  )
}

export default SinglePost

const styles = StyleSheet.create({})