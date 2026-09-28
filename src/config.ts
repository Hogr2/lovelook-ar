export const STORE_NAME = "عبدالعزيز بن خليفة الزريق لنظارات";
export const WHATSAPP_NUMBER = "PHONE_NUMBER";
export const CURRENCY = "ر.س";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}