import { mainPageBorderRadius } from "@/constants/defultValus";
import { Pressable, StyleSheet, Text, View, } from "react-native";


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
          <Text style={{color: '#4f3828ff', fontSize:16}}>
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
    alignContent: "center",
    backgroundColor: '#ecdfd0', // Card background
    borderRadius: mainPageBorderRadius,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#c19a6b', // Caramel border
    shadowColor: '#6f4e37', // Coffee shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    color: '#6f4e37', // Coffee brown text
  },

  textSyle:{
    fontSize: 16,
    fontWeight: 'bold',
  }
})

const buttenStyles = StyleSheet.create({
  btn: {
    borderColor: '#6f4e37', // Coffee brown
    borderRadius: 22,
    borderWidth: 2.5,
    backgroundColor: '#c19a6b', // Caramel border
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
