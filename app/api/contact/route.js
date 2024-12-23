import { google } from 'googleapis';
import { GoogleAuth } from 'google-auth-library';

export async function POST(req) {
  const { name, email, contact, subject, description } = await req.json();

  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');
  const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

  try {
    const auth = new GoogleAuth({
      credentials: {
        client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const authClient = await auth.getClient();

    const sheetsClient = google.sheets({ version: 'v4', auth: authClient });

    const values = [
      [
        new Date().toLocaleString(), //? Timestamp
        name,
        email,
        contact,
        subject,
        description,
      ], //? Form data
    ];

    const request = {
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A2', //* Adjust range according to your sheet structure
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values,
      },
    };

    const response = await sheetsClient.spreadsheets.values.append(request);

    if (response.status === 200) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      throw new Error('Failed to write to Google Sheets');
    }
  } catch (err) {
    console.error('Error:', err);
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
  }
}
