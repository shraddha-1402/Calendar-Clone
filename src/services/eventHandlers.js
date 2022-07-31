import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../index";

const addEvents = async (eventDetails) => {
  const eventRef = collection(db, "Events");
  try {
    const response = await addDoc(eventRef, eventDetails);
    return response.id;
  } catch (error) {
    console.log(error);
  }
};

const getEvents = async ({ month, year }) => {
  const eventRef = collection(db, "Events");
  try {
    const q = query(
      eventRef,
      where("month", "==", month),
      where("year", "==", year)
    );
    const response = await getDocs(q);
    let responseObj = {};
    response.forEach((doc) => {
      if (doc.exists()) {
        const { date, month, year } = doc.data();
        if (responseObj[`${date}${month}${year}`])
          responseObj[`${date}${month}${year}`].push({
            data: doc.data(),
            id: doc.id,
          });
        else
          responseObj[`${date}${month}${year}`] = [
            { data: doc.data(), id: doc.id },
          ];
      }
    });
    return responseObj;
  } catch (error) {
    console.log(error);
  }
};

export { addEvents, getEvents };
