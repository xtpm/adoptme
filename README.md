# Adopt Me Discord Bot

A small Discord bot for posting polished embeds, Adopt Me trade requests, and house images/videos.

## Setup

1. Install dependencies:

   ```powershell
   npm.cmd install
   ```

2. Copy `.env.example` to `.env` and fill in:

   - `DISCORD_TOKEN`: your bot token from the Discord Developer Portal
   - `CLIENT_ID`: your application ID
   - `GUILD_ID`: your server ID, recommended while testing

3. Register slash commands:

   ```powershell
   npm.cmd run deploy
   ```

4. Start the bot:

   ```powershell
   npm.cmd start
   ```

## Hosting On Koyeb

Use Koyeb if you want the bot to stay online without running from your PC.

1. Go to [Koyeb](https://www.koyeb.com/) and create an account.
2. Create a new app/service from the GitHub repo: `xtpm/adoptme`.
3. Choose **Worker** as the service type.
4. Use the Dockerfile in this repo for the build.
5. Set the start command to:

   ```bash
   npm start
   ```

6. Add these environment variables in Koyeb:

   ```env
   DISCORD_TOKEN=your_bot_token_here
   CLIENT_ID=your_application_client_id_here
   GUILD_ID=your_discord_server_id_here
   ```

7. Deploy the service.

Run slash command registration locally whenever commands change:

```powershell
npm.cmd run deploy
```

## Commands

- `/embed` posts a custom rich embed.
- `/trade` posts an Adopt Me trade request with optional image.
- `/house` posts a house showcase with optional image or video.

## Discord Bot Permissions

When inviting the bot, give it:

- `Send Messages`
- `Embed Links`
- `Attach Files`
- `Use Slash Commands`
