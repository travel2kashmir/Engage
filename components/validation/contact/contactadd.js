import { parsePhoneNumber } from "awesome-phonenumber";

const validateContact = (data,props) =>{
    var error={};
     var flag=[]
     var final_flag=true;
    
    if(data.contact_type==="" || data.contact_type===undefined)
    {
        flag.push(false)
        error.contact_type="APP: The contact type is required"
    }

    if(data.contact_data==="" || data.contact_data===undefined)
    {
        flag.push(false)
        error.contact_data="APP: The contact data is required."
    }

    if(data.contact_type !== "" && data.contact_type!== undefined){
        if(data.contact_type === "email"){  
    if((!data.contact_data?.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/))){
        flag.push(false)
        error.contact_data="APP: The email is invalid."
    }
}
    }

    if(data.contact_type !== "" && data.contact_type !== undefined){
    if(data.contact_type === "phone"){  
    const pn = parsePhoneNumber(data.contact_data, {regionCode:props})
    if (pn?.valid == false) {
        flag.push(false)
        error.contact_data = `APP: The phone number is invalid.`
      }
}
    }
   
    if(data.contact_type !== "" && data.contact_type !== undefined){
        if(data.contact_type === "tdd number"){  
        if((!data?.contact_data?.match(/^([1-9]+[0-9]*)$/))){
            flag.push(false)
          error.contact_data="APP: The tdd number is invalid."
        }
    }
        }
     if(data.contact_type !== "" && data.contact_type !== undefined){
            if(data.contact_type === "toll free number"){  
            if((!data?.contact_data?.match(/^([1-9]+[0-9]*)$/))){
                flag.push(false)
                error.contact_data="APP: The toll free number is invalid."
            }
        }
     }

    
    for (let value in flag) {
     
        if(flag[value]=== false)
         {
           final_flag = false;
           break;
         }
         
      } 

      return final_flag===true ? true : error;
    }
export default  validateContact

