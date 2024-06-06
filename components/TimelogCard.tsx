import { Tag, Task, Timelog } from '@/constants/types'
import { formatTime } from '@/helpers/time-format'
import useDatabase from '@/hooks/useDatabase'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TagChip from './TagChip'

interface TimelogCardProps {
    timelog: Timelog
    tags?: Tag[]
}

const TimelogCard = ({ timelog, tags }: TimelogCardProps) => {
    const { getTask, deleteTimelog } = useDatabase()

    const [task, setTask] = useState<Task | null>(null)

    useEffect(() => {
        getTask(timelog.task_id).then(setTask)
    }, [])

    const handleDeleteTimelog = async () => {
        try {
            await deleteTimelog(timelog.id)
        } catch (error) {
            Alert.alert('Error', 'Failed to delete timelog')
        }
    }

    return (
        <View style={styles.timelogCard}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Text style={styles.timelogText}>
                    {formatTime(timelog.duration)}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        color: 'grey',
                    }}
                >
                    {moment(timelog.start_time).format('h:mm a')}
                </Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                }}
            >
                <Text style={{ fontSize: 16, color: '#005c99' }}>
                    {task ? task.description : 'Loading...'}
                </Text>
                <TouchableOpacity onPress={handleDeleteTimelog}>
                    <Feather name="x" size={16} color="red" />
                </TouchableOpacity>
            </View>
            {/* TODO: Add Tags */}
            <View
                style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 10,
                    gap: 5,
                }}
            >
                {tags &&
                    tags.length > 0 &&
                    tags.map((tag) => <TagChip key={tag.id} tag={tag} />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    timelogCard: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.12,
        shadowRadius: 20,
        elevation: 8,
    },
    timelogText: {
        fontSize: 24,
        color: 'black',
    },
})

export default TimelogCard
