

weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]


//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

op = {}
for(let data of weatherData ){ //data = {district:'Thrissur',weather:32}//{district:'Kottayam',weather:29} // {district:'Palakkad',weather:34} // {district:'Ernakulam',weather:33}// {district:'Thrissur',weather:29},//    {district:'Kottayam',weather:30},
    district = data.district//Thrissur//Kottayam//Palakkad//Ernakulam//Thrissur
    currTemp = data.weather//32//29//34//33//29
    if(district in op){//Thrissur?op//Kottayam?op//Palakkad?op//Ernakulam?op//Thrissur?op//
        oldtemp = op[district]//32
        if(oldtemp>currTemp){//32>29
            op[district] = oldtemp//32
        }
        else{
            op[district] = currTemp
        }

    }
    else{
        op[district] = currTemp//{Thrissur:32}//{Thrissur:32,Kottayam:29}//{Thrissur:32,Kottayam:29,Palakkad:34}//{Thrissur:32,Kottayam:29,Palakkad:34Ernakulam:33}
        //{Thrissur:32,Kottayam:29,Palakkad:34Ernakulam:33}
        
    }
   
}
console.log(op);