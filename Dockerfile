FROM mcr.microsoft.com/playwright:focal

WORKDIR /workspace

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test", "--reporter=html"]
