const base: string = 'http://localhost:3000';

export const createCategory: URL = new URL(`${base}/api/createcategory`);
export const getCategory: URL = new URL(`${base}/api/getallcategory`);
