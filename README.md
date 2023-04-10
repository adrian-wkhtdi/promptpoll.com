## Setup

Install the [supabase CLI](https://supabase.com/docs/guides/cli)

Make sure you have a `./supabase/.env` file with the following content:

```bash
export TWITTER_API_KEY=YOUR-TWITTER-API-KEY
export TWITTER_API_SECRET=YOUR-TWITTER-API-SECRET
```

Start supabase locally:

```bash
source ./supabase/.env && supabase start
```