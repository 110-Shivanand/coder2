const socket=io()
console.log('hey it is connected')

if (navigator.geolocation){
    navigator.geolocation.watchPosition(
        (position)=>{
            const{lattitude,longitude}=position.coords;
            socket.emit('send-location',{lattitude,longitude})
        },(error)=>{
            console.log('error occured')
        },
        {
            enableHighAccuracy:true,
            timeout:5000,
            maximumAge:0
        }
    )
}

L.map('map');