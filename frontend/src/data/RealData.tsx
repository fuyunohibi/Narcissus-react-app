import React, { useState } from 'react'
import axios from 'axios';

const RealData = () => {
   const [recordID, setRecordID] = useState('');
   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [height, setHeight] = useState('');
   const [weight, setWeight] = useState('');
   const [address, setAddress] = useState('');
   const [contact, setContact] = useState('');
   const [career, setCareer] = useState('');
   const [date, setDate] = useState('');
   const [typeOfCrime, setTypeOfCrime] = useState('');
   const [victimAge, setVictimAge] = useState('');
   const [term, setTerm] = useState('');
   const [institution, setInstitution] = useState('');

   function getCrimeData() {
      axios.get('http://localhost:3000/', { crossdomain: true })
         .then(response => {
            setRecordID(response.data.recordID);
            setName(response.data.name);
            setAge(response.data.age);
            setHeight(response.data.height);
            setWeight(response.data.weight);
            setAddress(response.data.address);
            setContact(response.data.contact);
            setCareer(response.data.career);
            setDate(response.data.date);
            setTypeOfCrime(response.data.typeOfCrime);
            setVictimAge(response.data.victimAge);
            setTerm(response.data.term);
            setInstitution(response.data.institution);
         })
   };

}

export default RealData;