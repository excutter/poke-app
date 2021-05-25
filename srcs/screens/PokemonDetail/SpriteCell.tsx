import React, { FC } from 'react'
import { 
    View, 
    Image 
} from 'react-native'

import styles from './styles/spritecell.styles'

type SpriteCellProps = {
    url: string
}

const SpriteCell: FC<SpriteCellProps> = ({ url }) => {
    return <View>
        <Image
            style={styles.sprite} 
            source={{ uri: url }}
            resizeMode="contain" />
    </View>
}

export default SpriteCell
