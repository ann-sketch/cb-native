import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({ 
    container: {
        width: '100%',
        height: '100%',
    },   
    backButtonContainer: {
        marginTop: 50,
        marginLeft: 8,
    },
    profileContainer: {
        alignItems: 'center',
    },
    profileImageBorder: {
        width: 120,
        height: 120,
        borderRadius: '50%',
        borderColor: 'grey',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        borderRightWidth: 3,
        borderLeftWidth: 3,
        marginTop: 20,
        marginBottom: 12,
        overflow: 'hidden',
    },
    text: {
        fontSize: 29,
        marginBottom: 12,
        fontWeight: '700'
    },
    subContainer: {
        flexWrap: 'wrap',
        borderColor: 'black',
        borderTopWidth: 1.8,
        padding: 24,
        flexDirection: 'column',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    sc: {
        backgroundColor: 'gainsboro',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 16,
        overflow: 'hidden',
    },
    textInput: {
        fontSize: 26,
        backgroundColor: 'gainsboro',
        color: 'black',
        paddingLeft: 20,
        paddingRight: 5,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        marginBottom: 5,
        height: 40,
        width:260,
        fontSize: 25,
    },
    save: {
        fontWeight: '700',
        fontSize: 24,
        paddingRight: 15,
        color: 'gray'
    },
    notificationContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft: 20,
        fontSize: 22,
    },
    t: {
        fontSize: 21,
        fontWeight: "700",
        marginBottom: 6,
    },
    ot: {
        paddingLeft: 22, 
        marginTop: 10,
        marginBottom: 12,
    },
    otc:{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
        paddingRight: 25,
        marginBottom: 20
    },
    resetb:{
        backgroundColor: 'ghostwhite',
        width: 110,
        height: 60,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    rt: {
        fontWeight: '700',
        color: 'red',
        fontSize: 24,
    }, 
    lbc: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 20
    },
    lb: {
        width: 280,
        height: 70,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: 'ghostwhite',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lt: {
        fontSize: 24,
        fontWeight: '700',
        color: 'black',
    }
});

// const styles = StyleSheet.create({
//     sContainer: {
//         height: '100%',
//         width: '100%',
//     },
//     headerC: {
//         width: '100%',
//         display: 'flex',
//         backgroundColor: 'dodgerblue',
//         paddingTop: 30,
//         paddingBottom: 8,
//         borderBottomRightRadius: 14,
//         borderBottomLeftRadius: 14,
//     },
//     header: {
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         paddingRight: 10,
//     },
//     vheader: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center'
//     }
//     ,
//     sT: {
//         fontSize: 24,
//         fontWeight: 700,
//         marginLeft: 8,
//         color: 'ghostwhite'
//     },
//     profileContainer: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//         alignItems: 'center',
//         marginTop: 12,
//     },
//     profileText: {
//         fontSize: 18,
//         fontWeight: 600,
//         marginLeft: 12,
//         color: 'ghostwhite'
//     },
//     profilePicture: {
//         backgroundColor: 'white',
//         width: 70,
//         height: 70,
//         borderRadius: '50%',
//         marginRight: 18,
//         borderColor: 'whitesmoke',
//         borderBottomWidth: 3,
//         borderTopWidth: 3,
//         borderRightWidth: 3,
//         borderLeftWidth: 3,
//     },
//     subSection: {
//         display: 'flex',
//         flexDirection: 'column',
//         marginTop: 14,

//     },
//     hT: {
//         fontWeight: 700,
//         fontSize: 24,
//         marginBottom: 8,
//         marginTop: 8,
//         marginLeft: 12,
//         color: 'black',
//     },
//     sOption: {
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         margin: 10,
//         borderBottomColor: 'whitesmoke',
//         borderBottomWidth: 4,
//         height: 36,
//     },
//     optionsText: {
//         fontSize: 16,
//         color: 'gray',
//         fontWeight: 500,
//     },
//     logout: {
//         width: 140,
//         borderTopLeftRadius: 10,
//         borderBottomLeftRadius: 10,
//         borderTopRightRadius: 10,
//         borderBottomRightRadius: 10,
//         overflow: 'hidden',
//         backgroundColor: 'tomato',
//         marginTop: 10,
//         marginBottom: 10,
//     },
//     footer: {
//         display: 'flex',
//         alignItems: 'center',
//     }
// })

export default styles; 