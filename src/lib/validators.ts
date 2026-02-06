export interface TourPayload {
  title: string;
  location: string;
  duration: string;
  price: number;
  description: string;
  imageUrl?: string;
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

  return {
    valid: true,
    data: {
      title: String(payload.title),
      location: String(payload.location),
      duration: String(payload.duration),
      description: String(payload.description),
      price,
      imageUrl: payload.imageUrl ? String(payload.imageUrl) : undefined,
    },
  };
}
