import { commonApi } from "./commonApi";
import { SERVER_URL } from "./server_url";



//upload video
export const uploadVideoAPI = async(video) => {
    return await commonApi("POST", `${SERVER_URL}/allvideos `, video)    
}

//get all uploaded video
 export const getAlluploadedVideosAPI = async() => {
    return await commonApi("GET", `${SERVER_URL}/allvideos`,"")
 }

 //get a video
 export const getAVideoAPI = async(id) => {
    return await commonApi("GET", `${SERVER_URL}/allvideos/${id}`,"")
 }




//delete uploaded video
export const deleteVideoAPI = async(id) => {
    return await commonApi("DELETE", `${SERVER_URL}/allvideos/${id}`,{ })
    
 }
//add watch history
export const watchHistoryAPI = async(video) => {
    return await commonApi("POST", `${SERVER_URL}/history`,video)
 }
 //get watch history
 export const getWatchHistoryAPI = async() => {
    return await commonApi("GET", `${SERVER_URL}/history`,"")
 }
 //delete watch history
 export const deleteWatchHistoryAPI = async(id) => {
    return await commonApi("DELETE", `${SERVER_URL}/history/${id}`,{ })
 }

 // add videos category
 export const addCategoryAPI = async(category) => {
    return await commonApi("POST", `${SERVER_URL}/category`,category)
 }
 //get category
 export const getCategoryAPI = async() => {
    return await commonApi("GET", `${SERVER_URL}/category`,"")
 }
 //delete category
 export const deleteCategoryAPI = async(id) => {
    return await commonApi("DELETE", `${SERVER_URL}/category/${id}`,{ })
 }
  //update category
  export const updateCategoryAPI = async(id,categoryDetails) => {
   return await commonApi("PUT", `${SERVER_URL}/category/${id}`,categoryDetails)
}
