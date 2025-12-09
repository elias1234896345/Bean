import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
  initialRouteName="index">
    <Stack.Screen 
     name="index"
     options={{
        title: "CoffeBrew",
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        headerStyle:{
          backgroundColor: '#A84A3A',
        },
      }}
    />
    <Stack.Screen 
     name="statsPage"
     options={{
        title: "Stats Page",
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        headerStyle:{
          backgroundColor: 'brown',
        },
      }}
    />
    <Stack.Screen 
     name="addNewBeanPage"
     options={{
        title: "Add New Bean",
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle:{
          fontWeight: 'bold',
        },
        headerStyle:{
          backgroundColor: 'brown',
        },


      }}
    />
    <Stack.Screen
    name="beanListpage"
    options={{
      title: "Your Bean List",
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      headerTitleStyle:{
        fontWeight: 'bold',
      },
      headerStyle:{
        backgroundColor: 'brown',
      },
    }}
    />
    
    <Stack.Screen
    name="accountPage"
    options={{
      title: "Account",
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      headerTitleStyle:{
        fontWeight: 'bold',
      },
      headerStyle:{
        backgroundColor: 'brown',
      },
    }}
    />
  </Stack>
}
