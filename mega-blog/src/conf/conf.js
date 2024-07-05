const conf={
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteproject:String(import.meta.env.VITE_PROJECT_ID),
    appwritedatabase:String(import.meta.env.VITE_DATABASE_ID),
    appwritecollection:String(import.meta.env.VITE_COLLECTION_ID),
    appwritebucket:String(import.meta.env.VITE_BUCKET_ID)
}
export default conf