import vine from "@vinejs/vine";

export const studentCreationSchema=vine.object().shape({

  first_name:vine.string(),
  last_name:vine.string().optional(),
  dob:vine.DateTime(),
  gender:vine.string(),                             
  email:vine.email().optional(),
  phone:vine.string(),
  address:vine.string(),
  aadhar_number:vine.string().fixedLength(12),
  Religion:vine.string().optional(),                                        
  Caste:vine.string().optional(),                                           
  Blood_group:vine.string().maxLength(3).optional(),      
  Nationality:vine.string(),                                      
  Previous_school_name:vine.string().optional(),                             
  PEN_given_by_previous_school:vine.string().optional(),                     
  Previous_school_UDISE_code:vine.string().optional(),                       
  enrollment_date:vine.date(),     
  enrollment_number:vine.string(),
  PEN_number:vine.string().optional(),                                      
  class:vine.number().max(12),          
  section:vine.string().toUpperCase().maxLength(1),                                         
  class_Roll_number:vine.number(),                               
  Father_or_guardian_name:vine.string(),
  Father_or_guardian_aadhar_number:vine.string().fixedLength(12).optional(),               
  Father_or_guardian_mobile_number:vine.string().fixedLength(10),                
  Father_or_guardian_occupation_and_Qualification:vine.string().optional(),
  Mother_name:vine.string().maxLength(50).optional(),                                    
  Mother_phone_number:vine.string().fixedLength(10).optional(),                             
  Father_mother_ration_card_number_and_type:vine.string().optional(),
})



