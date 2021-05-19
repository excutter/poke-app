
const colors =  {
    blue: '#2B3567',
    purple: '#586296',
    yellow: '#E9CA5E',
    green: '#24BF3B',
    red: '#FF443A',
    gray: '#AEAEAE',
    white: '#FFFFFF',
    black: '#000000',
    light_yellow: '#FFE999',
    light_gray: '#F4F4F4',
    background: '#F2F1F7',
    palid_blue: '#5B6286',
    light_purple: '#C6CBE2'
}

export default colors

function hexToRgbA(hex, opacity = 1) {
    if (hex.length === 7) {
        const r = parseInt(hex.slice(1, 3), 16),
            g = parseInt(hex.slice(3, 5), 16),
            b = parseInt(hex.slice(5, 7), 16)
        return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }
    return '#000000'
}