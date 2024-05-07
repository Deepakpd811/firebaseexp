// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,getDocs,updateDoc,doc,deleteDoc,
  setDoc,addDoc, collection,Firestore} from "firebase/firestore/lite";




const firebaseConfig = {
  apiKey: "AIzaSyBHK4OSDIe-DXYhAhuR0mKfstwcAGME5Z0",
  authDomain: "nodejs-ef0ff.firebaseapp.com",
  projectId: "nodejs-ef0ff",
  storageBucket: "nodejs-ef0ff.appspot.com",
  messagingSenderId: "791260438580",
  appId: "1:791260438580:web:b254f0d280b539d35caa61",
  measurementId: "G-NQ6L22NFPT"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const filestoreobj = getFirestore(firebaseapp)
// const analytics = getAnalytics(app);

export  async function addEmp(empData)
{
  const empRef = collection(filestoreobj,"employee")
  const data = await addDoc(empRef,empData)

  return data;
}
export async function emplist()
{
  const empRef = collection(filestoreobj,"employee")
  const dataobj =  await getDocs(empRef)
  const list = dataobj.docs.map(doc=>doc.data())

  return list;
}
export async function updateEmp(empdata)
{
  console.log(empdata)
  const empRef = collection(filestoreobj,"employee")
  const empdocobj =  await getDocs(empRef,'R53OaQwTDsVRz332mYhJ')
  
  await setDoc(empdocobj,empdata)

  return "data updated";
}
export async function delEmp(empid)
{
  const empRef = collection(filestoreobj,"employee")
  const empdocobj =  await doc(empRef,empid)
  
  await deleteDoc(empdocobj,empid)

  return "data updated";
}

