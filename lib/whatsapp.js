export const WHATSAPP_NUMBER = "919226049035";

export const DEFAULT_MESSAGE =
  "Hi, I saw your profile on Pune Call Girl website.";

export function whatsappUrl(message = DEFAULT_MESSAGE) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
}

export function profileWhatsAppUrl(profileName) {
  const message = `Hi, I saw ${profileName}'s profile on Pune Call Girl website. I would like to book.`;
  return whatsappUrl(message);
}
