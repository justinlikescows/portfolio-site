# Spotify API Setup Guide

## Step 1: Create a Spotify App

1. Go to https://developer.spotify.com/dashboard
2. Log in with your Spotify account
3. Click "Create an App"
4. Fill in the details:
   - App name: "Portfolio Site"
   - App description: "My personal portfolio Spotify integration"
5. Click "Create"
6. Copy your **Client ID** and **Client Secret**

## Step 2: Set Redirect URI

1. In your app dashboard, click "Edit Settings"
2. Add `http://localhost:3000` to **Redirect URIs**
3. Click "Save"

## Step 3: Get Your Refresh Token

1. Replace `YOUR_CLIENT_ID` in this URL and open it in your browser:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000&scope=user-read-currently-playing%20user-read-recently-played
```

2. After authorizing, you'll be redirected to `http://localhost:3000/?code=...`
3. Copy the `code` parameter from the URL

4. Use this code to get your refresh token. Run this in your terminal (replace the values):

```bash
curl -X POST https://accounts.spotify.com/api/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code" \
  -d "code=YOUR_CODE_FROM_STEP_3" \
  -d "redirect_uri=http://localhost:3000" \
  -d "client_id=YOUR_CLIENT_ID" \
  -d "client_secret=YOUR_CLIENT_SECRET"
```

5. Copy the `refresh_token` from the response

## Step 4: Add to .env.local

Create a `.env.local` file in your project root:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

## Step 5: Restart Your Dev Server

```bash
npm run dev
```

Your Spotify widget will now show what you're currently listening to in real-time!

## Notes

- The widget updates every 30 seconds
- If nothing is playing, it shows your most recently played track
- The cassette tape reels spin when music is actively playing
- Click the link to open the current song in Spotify
