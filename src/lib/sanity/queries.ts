import { groq } from "next-sanity";

// カテゴリ取得の共通部分
const categoryFields = `
  "categories": categories[]->title,
  "categorySlugs": categories[]->slug.current
`;

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    body,
    htmlBody,
    contentFormat,
    symptoms,
    ${categoryFields}
  }
`;

export const postsByCategoryQuery = groq`
  *[_type == "post" && $categorySlug in categories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    body,
    htmlBody,
    contentFormat,
    symptoms,
    ${categoryFields}
  }
`;

export const searchPostsQuery = groq`
  *[_type == "post" && 
    ($categorySlug == null || $categorySlug in categories[]->slug.current) &&
    ($searchQuery == null || title match $searchQuery || excerpt match $searchQuery || htmlBody match $searchQuery) &&
    ($symptom == null || $symptom in symptoms)
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    body,
    htmlBody,
    contentFormat,
    symptoms,
    ${categoryFields}
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    body,
    htmlBody,
    contentFormat,
    symptoms,
    ${categoryFields}
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    htmlBody,
    contentFormat,
    "categoryRefs": categories[]._ref,
    ${categoryFields}
  }
`;

export const encyclopediaPostsQuery = allPostsQuery;

export const relatedPostsQuery = groq`
  *[_type == "post" && _id != $currentId && count(categories[@._ref in $categoryRefs]) > 0] | order(publishedAt desc)[0...4] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt,
    ${categoryFields}
  }
`;

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    image,
    order
  }
`;

export const animalCategoriesQuery = groq`
  *[_type == "category" && isAnimal == true] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    image,
    order
  }
`;

export const todayHotelBookingCountQuery = groq`
  count(*[_type == "hotelBooking" && checkInDate <= $today && checkOutDate >= $today])
`;

export const hotelAvailabilityQuery = groq`
  *[_type == "hotelBooking" && checkOutDate >= $startDate && checkInDate <= $endDate] {
    checkInDate,
    checkOutDate,
    roomType
  }
`;

export const faqsByCategoryQuery = groq`
  *[_type == "faq" && $category in categories] | order(order asc) {
    _id,
    question,
    answer,
    categories
  }
`;

export const allFaqsQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    categories
  }
`;

export const allFacilitiesQuery = groq`
  *[_type == "facility"] | order(order asc) {
    _id,
    title,
    category,
    image,
    description,
    order
  }
`;

export const closuresQuery = groq`
  *[_type == "closure" && date >= $startDate && date <= $endDate] {
    _id,
    date,
    type,
    reason
  }
`;
