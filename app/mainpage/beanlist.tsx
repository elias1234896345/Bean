import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";

type Bean = {
  id: string;
  name: string;
  roastery: string;
  land: string;
  kgPrice: number;
};

type Props = {
    beanList: Bean[];
    onAdd?: (id: string) => void;
}

export default function BeanList({beanList, onAdd}: Props ){
    return(
     <View style={style.beanlist}>
       <Text style={style.mainPageTextStyle}> BeanList </Text>

      <View style={style.alignmentStyle}>
         <FlatList
          data={beanList}
          keyExtractor={(item)=> item.id}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          style={{ width: "100%" }}                        // ensure full width
          contentContainerStyle={{ paddingVertical: 8 }}  // spacing inside list
          renderItem={({item}) => (
            <View style={styles.row}>
              <View style={styles.itemBox}>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {item.name} {item.kgPrice} {item.roastery} {item.land}
                </Text>
              </View>

              <TouchableOpacity 
                onPress={()=> onAdd?.(item.id)}
                style={styles.btn}
              >
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  itemBox: {
    flex: 1,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: 10,
  },
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

const style = StyleSheet.create({

beanlist:{
    minHeight: 200,
    maxHeight: 420,
    alignContent:  "center",
    backgroundColor: '#e0808fff',
    borderRadius: 22,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },    

mainPageTextStyle:{
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',

  },

  alignmentStyle:{
    width: '100%',
    maxHeight: 340,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  beanListDispaly:{
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },

  beanListTextStyle:{

  }

})