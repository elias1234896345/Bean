import type { BeanInfo } from "@/constants/defultValus";
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

type Prop = {
    visiable: boolean;
    bean?: BeanInfo | null;
    onClose: () => void;
}

export default function BeanInfoModal({visiable, bean, onClose}: Prop){
    console.log('BeanInfoModal props:', { visiable, bean });
    if(!bean) return null;

    return(
      <View >
        <Modal
            animationType="slide"
            transparent={true}
            visible={visiable}
            onRequestClose={onClose}
        >
          {/* outer touchable closes modal when tapping outside */}
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.overlay}>
              {/* inner touchable prevents outside press from propagating when tapping content */}
              <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.card}>
                    <TouchableOpacity style={{ position: 'absolute', top: 8, right: 8, backgroundColor: '#fff', borderRadius: 16, padding: 4, elevation: 3,}}
                       onPress={onClose} hitSlop={{top:8,left:8,right:8,bottom:8}}>
                        <Ionicons name="close" size={20} color="#333" />
                    </TouchableOpacity>
                    {/* Coffe image */}
                      <Image
                        source={require('../../assets/images/bag.png')}
                        style={{ width:'24%', height:'90%', borderRadius:12, alignSelf:'center', marginLeft:6 }}
                      />
                    {/* Name, palce, roastery, land, kgPrice */}
                    <View style={{ marginLeft:22, justifyContent:'space-evenly',flexDirection: 'column', width: '40%' }} >
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="coffee" size={13} />
                         <Text numberOfLines={1} style={{marginLeft:6}}>{bean.name}</Text>
                     </View>
                    
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                        <MaterialCommunityIcons name="factory" size={13} />
                        <Text numberOfLines={1}  style={{marginLeft:6}}>{bean.roastery}</Text>
                      </View>
                    </View>

                    <View style={{  justifyContent:'space-evenly',flexDirection: 'column',width: '35%' }} >
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                          <MaterialIcons name="attach-money" size={13} />
                        <Text numberOfLines={1}  style={{marginLeft:6}}>{bean.kgPrice}</Text>
                      </View>
                      <View style={{ alignItems: 'center', gap: 6, justifyContent:'flex-start', flexDirection: 'row'}}>
                        <Ionicons name="location-outline" size={13} />
                        <Text numberOfLines={1}  style={{marginLeft:6}}>{bean.land}</Text>
                      </View>
                    </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  card: {
    height: 180,
    width: '100%',
    borderRadius: 22,
    borderWidth: 3,
    flexDirection: 'row',
    backgroundColor: '#f5e1cf',
    padding: 10,
  },
});