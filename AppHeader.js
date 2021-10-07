import * as React from 'react';
import { Text ,View ,StyleSheet} from 'react-native'

class AppHeader extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style ={styles.textContainer}>POCKET DICTIONARY</Text>

                </View>
        )
    }
}
var styles= StyleSheet.create({
    textContainer:{
       color:'#ffff',
       padding:24,
       marginTop:10,
       fontSize:50,
      
       fontWeight: 'bold',
       textAlign: 'center',

    },
    container:{
        backgroundColor:'blue'

    }
})
export default AppHeader