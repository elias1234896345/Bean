import { ScrollView, StyleSheet, Text, View, } from "react-native";
import { BarChart, LineChart } from "react-native-gifted-charts";
import { mainPageBorderRadius, screenWidth } from '../../constants/defultValus';

  // later tke vlaues from json
const coffies = [2,3,4,5,6,7]
const week = ['41','42','43','44','45','46']
const coffiesweek = coffies.map((v,i) => ({
    value: v,
    label: week[i % week.length],
    frontColor: '#6f4e37',   
  })
)

const coffeeTypesData = [
  {
    stacks: [
      { value: 2, color: '#c19a6b' },      
      { value: 1, color: '#6f4e37' },     
    ],
    label: 'Mon',
  },
  {
    stacks: [
      { value: 2, color: '#c19a6b' },      
      { value: 3, color: '#6f4e37' },     
    ],
    label: 'Tue',
  },
  {
    stacks: [
      { value: 1, color: '#c19a6b' },      
      { value: 2, color: '#6f4e37' },     
      { value: 2, color: '#8b7355' },      
    ],
    label: 'Wed',
  },
];

export default function StatsPage(){
    return(
 
    <ScrollView style={graphStyle.scrollViewSyle} >

        {/*coffies per week */}
          <View style={graphStyle.container}>
                    <Text style ={graphStyle.headerGraphText}>
              Coffies per week
            </Text>    
              <View style= {graphStyle.graphDisplayArea}>
                  <BarChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={38}
                  initialSpacing={24}
                  xAxisLength={screenWidth} 
                  
                  />
              </View>
          </View>

        {/* coffies per week */}
          <View style={graphStyle.container}>
              <Text style ={graphStyle.headerGraphText}>
              Coffee types this week
          </Text>
  
  {/* Legend */}
  <View style={graphStyle.legendContainer}>
    <View style={graphStyle.legendItem}>
      <View style={[graphStyle.legendColor, { backgroundColor: '#c19a6b' }]} />
      <Text style={graphStyle.legendText}>Espresso</Text>
    </View>
    <View style={graphStyle.legendItem}>
      <View style={[graphStyle.legendColor, { backgroundColor: '#6f4e37' }]} />
      <Text style={graphStyle.legendText}>Coffee</Text>
    </View>
    <View style={graphStyle.legendItem}>
      <View style={[graphStyle.legendColor, { backgroundColor: '#8b7355' }]} />
      <Text style={graphStyle.legendText}>Macchiato</Text>
    </View>
  </View>

  <View style={graphStyle.graphDisplayAreaTypes}>
    <BarChart 
      stackData={coffeeTypesData}
      width={screenWidth}
      height={200}
      spacing={38}
      initialSpacing={24}
      xAxisLength={screenWidth} 
    />
  </View>
          </View>

        {/* coffein intake */}
       
          <View style={graphStyle.container}>
              <Text style ={graphStyle.headerGraphText}>
              Coffein Intake
          </Text>
              <View style= {graphStyle.graphDisplayArea}>
                  <LineChart 
                  data={coffiesweek}
                  width={screenWidth}
                  height={200}
                  spacing={45}
                  initialSpacing={24}
                  xAxisLength={324} 
                  color={'#6f4e37'}
                  />
              </View>
            </View>
     </ScrollView>
    );
}

const graphStyle = StyleSheet.create({
  scrollViewSyle:{
    flexGrow: 1,
    margin: 8,
    gap: 12,
    backgroundColor: '#faf7f2',
    
  },

  headerGraphText:{
    paddingTop: 8,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3e2723',
  },

  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
    marginVertical: 8,
  },

  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 4,
  },

  legendText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#4a3428',
  },

  container:{
    height: 294, 
    backgroundColor: '#ecdfd0',
    borderRadius: mainPageBorderRadius,
    alignItems: 'center',
    overflow: 'hidden',
    margin: 10,
    borderWidth: 1.5,
    borderColor: '#d4c4b0',
    shadowColor: '#3e2723',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,

  },
  graphDisplayArea: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
    paddingBottom:20,
    
  },

    graphDisplayAreaTypes: {
    width: '100%',
    height: '94%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems:'center',
    paddingBottom:60,
  }
})

