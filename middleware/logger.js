let date=new Date();

let currentHour=date.getHours();
let currentDay=date.getDay();
function logger (req,res,next){
    if(currentHour > 8 && currentHour<17 && currentDay>0 && currentDay<6){
        next();
    }else{
        res.send("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwBSL0jCA8o99jwFQIrfDTsJuwvvhzhKdujmiCoBBcw&s'/>")
    }
    }
module.exports=logger