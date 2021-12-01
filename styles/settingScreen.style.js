import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    sContainer: {
        height: '100%',
        width: '100%',
    },
    headerC: {
        width: '100%',
        display: 'flex',
        paddingTop: 30,
        paddingBottom: 8,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    },
    header: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    vheader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }
    ,
    sT: {
        fontSize: 24,
        fontWeight: 700,
        marginLeft: 8,
        color: 'dodgerblue'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
        marginTop: 12,
    },
    profileText: {
        fontSize: 18,
        fontWeight: 600,
        marginLeft: 12,
        color: 'black'
    },
    profilePicture: {
        backgroundColor: 'white',
        width: 90,
        height: 90,
        borderRadius: '50%',
        marginRight: 18,
        borderColor: 'dodgerblue',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
    },
    subSection: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 14,
        backgroundColor: 'white',

    },
    hT: {
        fontWeight: 700,
        fontSize: 24,
        marginBottom: 8,
        marginLeft: 12,
        color: 'black',
    },
    sOption: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
        borderBottomColor: 'whitesmoke',
        borderBottomWidth: 4,
        height: 36,
    },
    optionsText: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 500,
    },
    logout: {
        width: 140,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'tomato',
        marginTop: 10,
        marginBottom: 10,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 10,
    }
})

export default styles; 