"use server"
import { scrapeAmazonProduct } from "../scraper";

export const scrapeAndStoreProduct = async(productURL: string) => {
  if(!productURL) return;
  try {
    const scrapedProduct = scrapeAmazonProduct(productURL);
  } catch (error: any) {
    throw new Error(`Failed to create/update product details: ${error.message}`)
  }
}
