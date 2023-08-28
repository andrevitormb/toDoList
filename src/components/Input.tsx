import { TextInput,TouchableOpacity,View,Image} from "react-native";


export default function Input (){
    return(
        <View className="flex flex-row absolute z-20 top-[190] h-[45] self-center ">
            <TextInput placeholder="Add a task ..." placeholderTextColor={'#808080'} 
            className="w-60 bg-gray-400 rounded-md mr-2 p-2" />
            <TouchableOpacity className="flex w-[45] bg-blue-dark items-center justify-center rounded-md">
               <Image source={require('../../assets/plus.png')}/>
            </TouchableOpacity>
            
        </View>
    )
}