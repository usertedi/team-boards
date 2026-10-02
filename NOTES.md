# Learning Journal

## Phase 0 — step 1 (tool check + folders)

- **Node** runs JavaScript outside the browser (our server). **npm** installs packages.
- **Git** saves snapshots of the project; **GitHub** stores a copy online (`origin`).
- **PostgreSQL** is the database; the Windows **service** `postgresql-x64-18` means it is running even if `psql` is not on PATH yet.
- **`client/`** = React app later; **`server/`** = Express + Prisma later. Empty folders need a `.gitkeep` file so Git can track them.

## Phase 0 — step 2 (PostgreSQL database)

- A **database** inside PostgreSQL is like a separate notebook for one app (`team_boards`).
- **`DATABASE_URL`** tells Prisma how to connect: user, password, host, port, database name.
- **`.env.example`** is a safe template we commit; **`.env`** holds your real password and stays local.
- On Windows PowerShell, if `npm` errors on scripts, use **`npm.cmd`** or relax execution policy for your user (see step instructions).

## Phase 0 — step 3 (npm + PATH)

- **`npm`** on Windows is often a PowerShell script (`npm.ps1`). **Execution policy** decides if PowerShell may run local/signed scripts.
- **`RemoteSigned`** for **CurrentUser** is a common dev fix: your own scripts run; downloaded ones need a signature.
- **PATH** is the list of folders Windows searches for programs. Adding Postgres `bin` lets you type `psql` instead of the full path.
- Phase 0 ends after the **5-question quiz** — no Phase 1 until you pass.
