
import { FETCH_SERVICES_SUCCESS } from "../types";

import db from '../db'

export const fetchServices = () => {

  debugger
  return db
    .collection('services')
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => doc.data())
      debugger
      return {
        type: FETCH_SERVICES_SUCCESS,
        services
      }
    })


}