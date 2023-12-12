# glennsweeney.github.io

## Design Guidelines

- Fonts and spacing in rem
- Padding and horizontal margin in px
- Text vertical margin in rem
- Media queries are not phone/tablet/laptop/monitor, but a measure of available space
- Consider page visiblity both with zoom at or over 200%, as well as an increased default font size!

## Getting Started

1. Install Node.js:

   ```bash
   sudo apt-get update
   sudo apt-get install -y ca-certificates curl gnupg
   sudo mkdir -p /etc/apt/keyrings
   curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
   NODE_MAJOR=20
   echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
   sudo apt-get update
   sudo apt-get install nodejs -y
   ```

1. Install packages:

   ```bash
   npm install
   ```

## Developing

1. Run dev:

   ```bash
   npm run dev -- --open
   ```

## Building

1. Run build:

   ```bash
   npm run build
   ```
