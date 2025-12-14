import { Text, View, StyleSheet, Pressable, } from "react-native";
import { COFFEE_COLORS, mainPageBorderRadius } from "@/constants/defultValus";


export default function EasyAcces(){
    return(
    <View style={style.container}>
      <View style={style.alignmentStyle}>
        <Text style={style.mainPageTextStyle}>
            Add previously coffee                
        </Text>
        <Pressable
        onPress={()=> null}
        style={buttenStyles.btn}
        >
          <Text>
            +
          </Text>
        </Pressable>
       
      </View>
      
    </View>
    );
}


const style = StyleSheet.create({

  container:{
    height: 80,
    alignContent:  "center",
    backgroundColor: COFFEE_COLORS.nr3,
    borderRadius: mainPageBorderRadius,
    overflow: 'hidden',     
  },

  alignmentStyle:{
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flex: 0.7,
    
  },
  mainPageTextStyle:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',

  },

  textSyle:{
    fontSize: 16,
    fontWeight: 'bold',
  }
})

const buttenStyles = StyleSheet.create({
 btn: {
    backgroundColor: "#e0dfe8",
    borderRadius: 22,
    borderWidth: 2.5,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
