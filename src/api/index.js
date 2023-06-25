import axios from 'axios';


export const getPlacesData = async(type,sw,ne)=>{
    try{
        //request
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
              bl_latitude: sw.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
              tr_latitude: ne.lat,
      },
              headers: {
              
                 //'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,

                'X-RapidAPI-Key': '0489b89b6amsh33c76c73b3515fcp103086jsn95d716a0e6b5',   

                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data;
    }
    catch(error){
        console.log(error);
    }
}
