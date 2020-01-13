import { StyleSheet } from 'react-native'

export const globalColor = function(width) {
    return {
        width: width + "%",
        borderBottomColor: 'red', 
        borderBottomWidth: 2
    }
}

export const globalStyles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },  
    titleText: {
        fontSize: 18,
        color: '#333'
    },
    horiZontalRow: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    boldText: {
        fontWeight: 'bold'
    }
})