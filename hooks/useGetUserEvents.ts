import { getUserEvents } from '@/services/api/queries/events.queries'
import { UserEventsResponse } from '@/services/types'
import { useQuery } from '@tanstack/react-query'

const useGetUserEvents = () => {
    return useQuery<UserEventsResponse>({
        queryKey: ["user-events"],
        queryFn: getUserEvents,
    })
}

export default useGetUserEvents