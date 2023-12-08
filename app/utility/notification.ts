import twilio from "twilio";
// import { Client } from "twilio/lib/twiml/VoiceResponse";
// Optional afro message alternative
//  Generate Random number using Math.random and set an exipry time of 30 minutes
const accountSid = "";
const authToken = "";
const client = twilio(accountSid, authToken);
export const GenerateAccessCode = () => {
  const code = Math.floor(1000 + Math.random() * 900000);
  const expiry = new Date();
  expiry.setDate(new Date().getTime() + 30 * 60 * 1000);
  return { code, expiry };
};
export const SendVerificationCode = async (
  code: number,
  toPhoneNumber: string
) => {
  const response = await client.messages.create({
    body: `Your verification code is ${code}.`,
    from: "+251911145079",
    to: toPhoneNumber.trim(),
  });
  console.log(response);
  return response;
};
