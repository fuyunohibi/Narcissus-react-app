import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import ProfileFrame from '../components/ProfileFrame';
import randomOffenseCode from '../helpers/randomIDGenerator';
import LoadingScreen from './LoadingScreen';


const RealCriminalInfo = () => {
   const [criminalData, setCriminalData] = useState(null);

   useEffect(() => {
      axios.get('http://localhost:4000/receiveData', { crossDomain: true } )
         .then(response => {
            const responseData = response.data;
            setCriminalData(responseData); // Update the state with the received data
         })
         .catch(error => {
            console.log(error);
         });
   }, []);

   if (criminalData === null) {
      return <LoadingScreen/>
   } else {  return (
         <div>
            <div className="text-left pl-10 pt-10 pr-10 ">
               <div className="flex justify-between">
                  <div>
                     <h1 className="text-6xl font-bold text-sky-800 pb-2">MST</h1>
                     <h1 className="text-3xl font-bold pb-0">CRIMINAL RECORD</h1>
                     <h1 className="text-sm font-bold pb-8">Made by Mesan Tech</h1>
                  </div>
               </div>
               <div>
                  <div className="border-t pt-2 border-b pb-2 flex">
                     <p className="text-sm font-medium">RECORD ID</p>
                     <div className="ml-4 flex">
                     <p className="text-m font-bold mx-2">{criminalData.recordID[0]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[1]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[2]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[3]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[4]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[5]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[6]}</p>
                     <div className="border-l"></div>
                     <p className="text-m font-bold mx-2">{criminalData.recordID[7]}</p>
                  </div>
               </div>
                  <p className="text-sm font-medium border-t pt-2 border-b pb-2" >NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{criminalData.name}</p>
                  <p className="text-sm font-medium border-t pt-2 border-b pb-2" >AGE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{criminalData.age}</p>
                  <p className="text-sm font-medium border-t pt-2 border-b pb-2" >HEIGHT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{criminalData.height}</p>
                  <p className="text-sm font-medium border-t pt-2 border-b pb-2" >WEIGHT&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{criminalData.weight}</p>
                  <p className="text-sm font-bold pt-10">ARREST & SENTENCING INFO</p>
                  <div>
                     <table className="table-auto w-full">
                        <thead>
                           <tr>
                              <th className="text-sm font-semibold px-4 py-2">DATE</th>
                              <th className="text-sm font-semibold px-4 py-2">OFFENSE CODE</th>
                              <th className="text-sm font-semibold px-4 py-2">INSTITUTION</th>
                              <th className="text-sm font-semibold px-4 py-2">CHARGE AND DESCRIPTION</th>
                              <th className="text-sm font-semibold px-4 py-2">TERM</th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td className="border px-4 py-2">{criminalData.date}</td>
                              <td className="border px-4 py-2">{randomOffenseCode}</td>
                              <td className="border px-4 py-2">{criminalData.institution}</td>
                              <td className="border px-4 py-2">{criminalData.typeOfCrime}</td>
                              <td className="border px-4 py-2">{criminalData.term}</td>
                           </tr>
                           <tr>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                           </tr>
                           <tr>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                           </tr>
                           <tr>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                           </tr>
                           <tr>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                           </tr>
                           <tr>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                              <td className="border px-4 py-2">...</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div className="absolute top-2 right-0 mt-10 mr-10">
                     <ProfileFrame />
                  </div>
               </div>
            </div>
         </div>            
      );
   }
};


export default RealCriminalInfo