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
