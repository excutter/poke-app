import React, { FC } from 'react'
import { 
    View, 
    Image,
    StyleSheet 
} from 'react-native'
import { getScreenWidth } from '../styles/functionStyles'

type SpriteCellProps = {
    url: string
}

const SpriteCell: FC<SpriteCellProps> = ({ url }) => {
    return <View>
        <Image
            style={styles.sprite} 
            source={{ uri: url }}
            resizeMode="cover" />
    </View>
}

export default SpriteCell

const styles = StyleSheet.create({
    sprite: {
        flexGrow: 1,
        width: getScreenWidth * 0.35
    }
})
