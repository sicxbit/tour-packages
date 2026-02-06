export interface TourPayload {
  title: string;
  location: string;
  duration: string;
  price: number;
  description: string;
  imageUrl?: string;
  isFeatured: boolean;
  featuredOrder?: number;
}

export function validateTourPayload(body: unknown): {
  valid: boolean;
  data?: TourPayload;
  message?: string;
} {
  if (!body || typeof body !== "object") {
    return { valid: false, message: "Invalid payload" };
  }

  const payload = body as Record<string, unknown>;
  const requiredFields = ["title", "location", "duration", "price", "description"];

  for (const field of requiredFields) {
    const value = payload[field];
    if (value === undefined || value === null || value === "") {
      return { valid: false, message: `${field} is required` };
    }
  }

  const price = Number(payload.price);
  if (Number.isNaN(price) || price < 0) {
    return { valid: false, message: "price must be a non-negative number" };
  }

  const isFeatured = Boolean(payload.isFeatured);
  const featuredOrderRaw = payload.featuredOrder;
  const featuredOrder =
    featuredOrderRaw === undefined || featuredOrderRaw === null || featuredOrderRaw === ""
      ? undefined
      : Number(featuredOrderRaw);

  if (featuredOrder !== undefined && (!Number.isInteger(featuredOrder) || featuredOrder < 1)) {
    return { valid: false, message: "featuredOrder must be a positive integer" };
  }

  return {
    valid: true,
    data: {
      title: String(payload.title),
      location: String(payload.location),
      duration: String(payload.duration),
      description: String(payload.description),
      price,
      imageUrl: payload.imageUrl ? String(payload.imageUrl) : undefined,
      isFeatured,
      featuredOrder: isFeatured ? featuredOrder : undefined,
    },
  };
}
