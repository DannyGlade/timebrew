import { Ionicons } from '@expo/vector-icons'
import { ChevronRight, Palette } from '@tamagui/lucide-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'
import {
    View,
    Text,
    H1,
    ScrollView,
    YGroup,
    Separator,
    ListItem,
} from 'tamagui'

const Settings = () => {
    const router = useRouter()

    return (
        <ScrollView margin={20}>
            <YGroup>
                {/* <YGroup.Item>
                    <ListItem
                        title="Account"
                        pressTheme
                        icon={<Ionicons name="person" size={24} />}
                        iconAfter={<Ionicons name="chevron-forward" size={24} />}
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        title="Notifications"
                        pressTheme
                        icon={<Ionicons name="notifications" size={24} />}
                        iconAfter={<Ionicons name="chevron-forward" size={24} />}
                    />
                </YGroup.Item> */}
                <YGroup.Item>
                    <ListItem
                        title="Themes"
                        pressTheme
                        icon={<Palette size={24} />}
                        iconAfter={<ChevronRight size={24} />}
                        onPress={() => {
                            router.push('settings/themes')
                        }}
                    />
                </YGroup.Item>
            </YGroup>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})

export default Settings
