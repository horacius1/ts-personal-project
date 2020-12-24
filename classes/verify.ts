


type teacherData = 
    {
        name: {
          first: string,
          last: string
        },
         image :  string ,
         dateOfBirth :  string , // format date
         emails :  [
          {
             email :  string ,
             primary :  boolean 
          }
        ],
         phones : [
          {
             phone :  string ,
             primary :  boolean 
          }
        ],
         sex :  "male"| "female" , // male or female
         subjects : [
          {
             subject :  string 
          }
        ],
         description :  string ,
      }
type teacherDataUpdate  = 
    {
        name?: {
          first: string,
          last: string
        },
         image ?:  string ,
         dateOfBirth ?:  string , // format date
         emails? : [
          {
             email :  string ,
             primary :  boolean 
          }
        ],
         phones ?: [
          {
             phone :  string ,
             primary :  boolean 
          }
        ],
         sex ?:  "male"| "female" , // male or female
         subjects ?: [
          {
             subject :  string 
          }
        ],
         description :  string ,
      }
  

  type pupilData= {
     
	
        name: {
          first: string,
          last: string
        },
        image: string,
        dateOfBirth: string, // format date
        phones: [
          {
            phone: string,
            primary: boolean
          }
        ],
        sex: "male"| "female" , // male OR female
        description?: string
      }
  type pupilDataUpdate= {
     
	
        name?: {
          first: string,
          last: string
        },
        image?: string,
        dateOfBirth: string, // format date
        phones: [
          {
            phone: string,
            primary: boolean
          }
        ],
        sex?: "male"| "female" , // male OR female
        description?: string
      }
	
  type subject={
    title: string,
    lessons: number,
    description: string
  }


export {subject,teacherData,pupilData,teacherDataUpdate,pupilDataUpdate}