export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Messenger</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: #eef1f7; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #eef1f7; padding: 40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 40px rgba(91, 134, 229, 0.15);">

            <!-- Header -->
            <tr>
              <td style="background: linear-gradient(135deg, #6C5CE7 0%, #5B86E5 50%, #36D1DC 100%); padding: 48px 30px; text-align: center;">
                <div style="width: 72px; height: 72px; background-color: rgba(255,255,255,0.2); border-radius: 50%; display: inline-block; line-height: 72px; margin-bottom: 20px;">
                  <span style="font-size: 34px;">💬</span>
                </div>
                <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 600; letter-spacing: -0.3px;">Welcome to Messenger</h1>
                <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0 0; font-size: 15px;">We're glad you're here</p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding: 40px 36px;">
                <p style="font-size: 17px; color: #1a1a2e; margin: 0 0 16px 0;">Hi <strong>${name}</strong>,</p>
                <p style="font-size: 15px; color: #555b6e; line-height: 1.7; margin: 0 0 28px 0;">
                  We're excited to have you on board. Messenger connects you with friends, family, and colleagues in real-time — no matter where they are.
                </p>

                <!-- Steps card -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7f8fc; border-radius: 14px; margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 24px 26px;">
                      <p style="font-size: 15px; font-weight: 600; color: #1a1a2e; margin: 0 0 16px 0;">Get started in a few steps</p>
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #444; vertical-align: top; width: 28px;">🖼️</td>
                          <td style="padding: 6px 0; font-size: 14px; color: #444;">Set up your profile picture</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #444; vertical-align: top;">👥</td>
                          <td style="padding: 6px 0; font-size: 14px; color: #444;">Find and add your contacts</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #444; vertical-align: top;">💬</td>
                          <td style="padding: 6px 0; font-size: 14px; color: #444;">Start a conversation</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 0; font-size: 14px; color: #444; vertical-align: top;">📸</td>
                          <td style="padding: 6px 0; font-size: 14px; color: #444;">Share photos, videos, and more</td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- CTA button -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding: 4px 0 32px 0;">
                      <a href="${clientURL}" style="background: linear-gradient(135deg, #6C5CE7, #5B86E5); color: #ffffff; text-decoration: none; padding: 14px 38px; border-radius: 50px; font-weight: 600; font-size: 15px; display: inline-block; box-shadow: 0 6px 16px rgba(91, 134, 229, 0.35);">
                        Open Messenger →
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="font-size: 14px; color: #777; margin: 0 0 4px 0;">Need help or have questions? We're always here for you.</p>
                <p style="font-size: 14px; color: #777; margin: 0 0 24px 0;">Happy messaging!</p>

                <p style="font-size: 14px; color: #1a1a2e; margin: 0;">Best regards,<br><strong>The Messenger Team</strong></p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #f7f8fc; padding: 26px 30px; text-align: center; border-top: 1px solid #ececf5;">
                <p style="font-size: 12px; color: #999; margin: 0 0 10px 0;">© 2025 Messenger. All rights reserved.</p>
                <p style="margin: 0;">
                  <a href="#" style="color: #5B86E5; text-decoration: none; font-size: 12px; margin: 0 8px;">Privacy Policy</a>
                  <span style="color: #ccc;">•</span>
                  <a href="#" style="color: #5B86E5; text-decoration: none; font-size: 12px; margin: 0 8px;">Terms of Service</a>
                  <span style="color: #ccc;">•</span>
                  <a href="#" style="color: #5B86E5; text-decoration: none; font-size: 12px; margin: 0 8px;">Contact Us</a>
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
}
